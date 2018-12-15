import React, { Component } from 'react';
import tiers from '../data/tiers.json';
import fighters from '../data/fighters.json';
import api from '../utils/api';
import { DragDropContext } from 'react-beautiful-dnd';
import Tierlist from '../components/Tierlist';
import FightersContainer from '../components/FightersContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faTrophy, faBars);

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Create extends Component {
  constructor() {
    super();

    this.state = {
      fighters: fighters,
      sTier: [],
      aTier: [],
      bTier: [],
      cTier: [],
      dTier: [],
      title: '',
      name: '',
    };

    this.id2List = {
      droppable: 'fighters',
      droppableS: 'sTier',
      droppableA: 'aTier',
      droppableB: 'bTier',
      droppableC: 'cTier',
      droppableD: 'dTier',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getList = this.getList.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    api
      .saveTierlist({
        sTier: this.state.sTier,
        aTier: this.state.aTier,
        bTier: this.state.bTier,
        cTier: this.state.cTier,
        dTier: this.state.dTier,
        unused: this.state.unused,
        title: this.state.title,
        name: this.state.name ? this.state.name : 'anonymous',
      })
      .then(res => {
        console.log(res);
        this.setState({ title: '', name: '' });
      })
      .catch(err => console.log(err));
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // item dropped outside of a list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'droppableS') {
        state = { sTier: items };
      } else if (source.droppableId === 'droppableA') {
        state = { aTier: items };
      } else if (source.droppableId === 'droppableB') {
        state = { bTier: items };
      } else if (source.droppableId === 'droppableC') {
        state = { cTier: items };
      } else if (source.droppableId === 'droppableD') {
        state = { dTier: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      const state = {};

      state[this.id2List[source.droppableId]] = result[source.droppableId];
      state[this.id2List[destination.droppableId]] =
        result[destination.droppableId];

      this.setState(state);
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <FightersContainer fighters={this.state.fighters} />
        <Tierlist
          editable={true}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          tiers={tiers}
          sTier={this.state.sTier}
          aTier={this.state.aTier}
          bTier={this.state.bTier}
          cTier={this.state.cTier}
          dTier={this.state.dTier}
        />
      </DragDropContext>
    );
  }
}

export default Create;

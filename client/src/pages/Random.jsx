import React, { Component } from 'react';
import Tierlist from '../components/Tierlist';
import api from '../utils/api';

class Random extends Component {
  state = {
    sTier: [],
    aTier: [],
    bTier: [],
    cTier: [],
    dTier: [],
    title: '',
    author: '',
    upvotes: '',
    createdAt: '',
    _id: '',
  };

  componentDidMount() {
    this.getRandomTierlist();
  }

  getRandomTierlist() {
    api
      .getRandomTierlist()
      .then(res => {
        this.setState({ ...res.data[0] });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Tierlist key={this.state._id} editable={false} {...this.state} />
      </div>
    );
  }
}

export default Random;

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TierlistInfo from '../components/TierlistInfo';
import api from '../utils/api';

class TierlistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tierlists: [],
    };
  }

  componentDidMount() {
    this.getTierlists();
  }

  getTierlists() {
    const { query } = this.props;
    api
      .getTierlists(query)
      .then(res =>
        this.setState({
          tierlists: res.data,
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <List style={{ width: '100%' }}>
        <li
          style={{
            color: 'black',
            width: '80%',
            margin: '10px auto',
            borderRadius: 5,
            padding: '11px 24px',
          }}
        >
          <h3>{`${this.props.query.toUpperCase()} TIERLISTS`}</h3>
        </li>
        {this.state.tierlists.map(t => (
          <ListItem
            style={{
              backgroundColor: 'black',
              width: '80%',
              margin: '10px auto',
              borderRadius: 5,
            }}
            key={t._id}
          >
            <TierlistInfo
              list={true}
              id={t._id}
              title={t.title}
              author={t.author}
              upvotes={t.upvotes}
              createdAt={t.createdAt}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TierlistList;

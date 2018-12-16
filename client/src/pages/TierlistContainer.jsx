import React, { Component } from 'react';
import Tierlist from '../components/Tierlist';
import api from '../utils/api';

class TierlistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    if (this.props.random) {
      this.getRandomTierlist();
    } else {
      this.getTierlist();
    }
  }

  getTierlist() {
    const id = this.props.path.substr(1);
    api
      .getTierlist(id)
      .then(res => {
        this.setState({ ...res.data[0] });
      })
      .catch(err => console.log(err));
  }

  getRandomTierlist() {
    api
      .getRandomTierlist()
      .then(res => {
        this.setState({ ...res.data[0] });
      })
      .catch(err => console.log(err));
  }

  upvoteTierlist = id => {
    api
      .upvoteTierlist(id)
      .then(res => {
        if (res.data.msg) {
          return alert(res.data.msg);
        }
        this.setState({ upvotes: res.data.upvotes });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        className='tierlist-container'
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Tierlist
          key={this.state._id}
          editable={false}
          upvoteTierlist={this.upvoteTierlist}
          {...this.state}
        />
      </div>
    );
  }
}

export default TierlistContainer;

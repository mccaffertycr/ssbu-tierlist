import React, { Component } from 'react';
import api from '../utils/api';

class Random extends Component {
  onComponentDidMount() {
    this.getRandomTierlist();
  }

  getRandomTierlist() {
    api
      .getRandomTierlist()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
}

export default Random;

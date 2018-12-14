import React from 'react';
import '../styles/fighter.css';

const fighter = props => (
  <div>
    <img className='fighter' src={props.url} alt={props.name} />
  </div>
);

export default fighter;

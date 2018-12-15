import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/tierlistinfo.css';

const TierlistInfo = props => (
  <div className='tierlist-info'>
    <p>
      <span style={{ fontSize: 24 }}>
        <strong>{props.title}</strong>
      </span>
      <br />
      submitted by: <strong>{props.author}</strong> <br />
      <span style={{ color: 'gainsboro', fontSize: 14 }}>
        {new Date(props.createdAt).toDateString()}
      </span>
    </p>
    <button
      style={{
        background: 'none',
        border: '2px gainsboro solid',
        borderRadius: 5,
        padding: 10,
      }}
    >
      <FontAwesomeIcon style={{ color: 'gold' }} icon='trophy' />{' '}
      <span style={{ color: 'white' }}>{props.upvotes}</span>
    </button>
  </div>
);

export default TierlistInfo;

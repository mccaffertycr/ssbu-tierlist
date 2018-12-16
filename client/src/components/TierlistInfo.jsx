import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/tierlistinfo.css';

const TierlistInfo = props => (
  <div className='tierlist-info'>
    <p>
      {props.list ? (
        <Link to={`${props.id}`}>
          <span style={{ fontSize: 24 }}>
            <strong>{props.title}</strong>
          </span>
        </Link>
      ) : (
        <span style={{ fontSize: 24 }}>
          <strong>{props.title}</strong>
        </span>
      )}
      <br />
      submitted by: <strong>{props.author}</strong> <br />
      <span style={{ color: 'gainsboro', fontSize: 14 }}>
        {new Date(props.createdAt).toDateString()}
      </span>
    </p>
    {props.list ? (
      <div
        style={{
          background: 'none',
          border: '2px gainsboro solid',
          borderRadius: 5,
          padding: 10,
        }}
      >
        {' '}
        <FontAwesomeIcon style={{ color: 'gold' }} icon='trophy' />{' '}
        <span style={{ color: 'white' }}>{props.upvotes}</span>
      </div>
    ) : (
      <button
        style={{
          background: 'none',
          border: '2px gainsboro solid',
          borderRadius: 5,
          padding: 10,
        }}
        onClick={() => props.upvoteTierlist(props.id)}
      >
        <FontAwesomeIcon style={{ color: 'gold' }} icon='trophy' />{' '}
        <span style={{ color: 'white' }}>{props.upvotes}</span>
      </button>
    )}
  </div>
);

export default TierlistInfo;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import time from '../utils/time';
import '../styles/tierlistinfo.css';

const TierlistInfo = props => {
  const currentDate = new Date();
  let mins;
  let days;
  const hours = time.diff_hours(currentDate, new Date(props.createdAt));

  if (hours < 1) {
    mins = time.diff_mins(currentDate, new Date(props.createdAt));
  }
  if (hours > 24) {
    days = time.diff_days(currentDate, new Date(props.createdAt));
  }

  return (
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
        submitted by: <strong>{props.author}</strong>
        <span style={{ color: 'gainsboro' }}>
          {days
            ? days > 1
              ? ` ${days} days ago`
              : ` ${days} day ago`
            : hours < 1
            ? mins > 1
              ? ` ${mins} minutes ago`
              : ` ${mins} minute ago`
            : hours > 1
            ? ` ${hours} hours ago`
            : ` ${hours} hour ago`}
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
};

export default TierlistInfo;

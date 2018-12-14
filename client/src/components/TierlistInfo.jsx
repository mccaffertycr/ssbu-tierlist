import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/tierlistinfo.css';

const TierlistInfo = () => (
  <div className='tierlist-info'>
    <p>
      submitted by: <strong>user</strong> <br />
      <span style={{ color: 'gainsboro', fontSize: 14 }}>
        {new Date(Date.now()).toDateString()}
      </span>
    </p>
    <div>
      <FontAwesomeIcon style={{ color: 'gold' }} icon='trophy' />{' '}
      <span
        style={{
          background: 'gainsboro',
          color: 'black',
          borderRadius: 5,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        3
      </span>
    </div>
  </div>
);

export default TierlistInfo;

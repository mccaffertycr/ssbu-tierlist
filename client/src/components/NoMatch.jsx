import React from 'react';
import '../styles/nomatch.css';

const NoMatch = () => {
  return (
    <div className='no-match'>
      <p style={{ fontSize: 36, fontWeight: 900, color: 'pink' }}>
        (╯°□°）╯︵ ┻━┻
      </p>
      <h1>404 not found</h1>
    </div>
  );
};

export default NoMatch;

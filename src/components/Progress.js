import React from 'react';

function Progress({ progress }) {
  return (
    <div style={{ width: '100%', backgroundColor: '#f3f3f3', margin: '10px 0' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '10px',
          backgroundColor: '#4caf50',
        }}
      ></div>
      <p>{progress}%</p>
    </div>
  );
}

export default Progress;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Global File Transfer</h1>
      <Link to="/upload">
        <button>Upload File</button>
      </Link>
      <Link to="/download" style={{ marginLeft: '10px' }}>
        <button>Download File</button>
      </Link>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';

function Download() {
  const [link, setLink] = useState('');

  const handleDownload = async () => {
    if (!link) return;

    const response = await fetch(link);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-file';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter download link" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Download;

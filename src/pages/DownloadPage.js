import React from 'react';
import { useNavigate } from 'react-router-dom';
import Download from '../components/Download';

function DownloadPage() {
  const navigate = useNavigate(); // 获取导航函数

  const handleBackHome = () => {
    navigate('/'); // 返回到 Home 页面
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Download a File</h2>
      <Download />
      <button 
        onClick={handleBackHome} 
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default DownloadPage;

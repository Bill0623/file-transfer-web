import React from 'react';
import { useNavigate } from 'react-router-dom';
import Upload from '../components/Upload';

function UploadPage() {
  const navigate = useNavigate(); // 获取导航函数

  const handleBackHome = () => {
    navigate('/'); // 返回到 Home 页面
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Upload a File</h2>
      <Upload />
      <button 
        onClick={handleBackHome} 
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default UploadPage;

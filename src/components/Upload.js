import React, { useState } from 'react';
import Progress from './Progress';

function Upload() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (!files.length) return;

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files[]', file);
    });

    // 模拟上传进度（实际情况中应调用后端 API）
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // TODO: 将 formData 上传到服务器
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');

      console.log('Upload successful');
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="file"
        webkitdirectory="true"
        multiple
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      <button onClick={handleUpload}>Upload Folder</button>
      <Progress progress={progress} />
    </div>
  );
}

export default Upload;

import React, { useState } from 'react';
import Progress from './Progress';

function Upload() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const MAX_TOTAL_SIZE = 10 * 1024 * 1024 * 1024; // 文件总大小最大 10GB

  // 处理文件选择（单文件、多文件、文件夹）
  const handleFileChange = (e) => {
    setError(''); // 重置错误信息
    const selectedFiles = Array.from(e.target.files);

    // 计算所有文件的总大小
    const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

    // 验证总大小是否超过 10GB
    if (totalSize > MAX_TOTAL_SIZE) {
      setError('文件总大小超过 10GB 的限制！');
      setFiles([]); // 清空已选择文件
      return;
    }

    setFiles(selectedFiles);
  };

  // 模拟上传进度
  const handleUpload = () => {
    if (!files.length) return;

    setProgress(0); // 重置进度

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // 格式化文件大小为 GB、MB 或 KB
  const formatFileSize = (size) => {
    if (size >= 1024 * 1024 * 1024) {
      return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    } else if (size >= 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
      return (size / 1024).toFixed(2) + ' KB';
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Upload Files</h2>

      {/* 单文件上传 */}
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '10px auto' }}
      />

      {/* 多文件和文件夹上传 */}
      <input
        type="file"
        multiple
        webkitdirectory="true"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '10px auto' }}
      />

      <button onClick={handleUpload} disabled={!files.length}>
        Upload
      </button>

      <Progress progress={progress} />

      {/* 错误提示 */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* 文件信息展示 */}
      {files.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {formatFileSize(file.size)}
              </li>
            ))}
          </ul>
          <p>Total Files: {files.length}</p>
        </div>
      )}
    </div>
  );
}

export default Upload;

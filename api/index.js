const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// 创建上传目录（如果不存在）
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 处理文件上传请求
app.post('/api/upload', upload.array('files[]'), (req, res) => {
  console.log('Files uploaded:', req.files);
  res.status(200).json({ message: 'Upload successful', files: req.files });
});

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

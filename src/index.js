import './index.css'; // 引入 CSS 文件
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 引入主 App 组件

// 确保正确获取 #root 元素
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// if ('serviceWorker' in navigator)为什么'serviceWorker'要写成字符串呢？'serviceWorker'不是navigator的属性吗？

// 在 JavaScript 中，您可以通过两种方式访问对象的属性：点表示法和方括号表示法。
// 点表示法：当属性名称是有效的 JavaScript 标识符时，您可以使用点表示法访问对象的属性。例如，navigator.serviceWorker。
// 方括号表示法：当属性名称包含特殊字符或不是有效的 JavaScript 标识符时，您可以使用方括号表示法访问对象的属性。
// 在这种情况下，属性名称需要作为字符串提供。例如，navigator['serviceWorker']。

// 这句代码检查 navigator 对象是否包含 serviceWorker 属性，以确定浏览器是否支持 Service Workers。
if ('serviceWorker' in navigator) {
  // 在页面加载完成后添加了一个事件监听器。页面加载完成时，会触发传入的回调函数。
  window.addEventListener('load', () => {
    navigator.serviceWorker
    // ：这一行代码负责注册 Service Worker。传入的参数是 Service Worker 脚本的 URL。在这个例子中，脚本位于 /service-worker.js。
      .register('/service-worker.js')
      // egister() 方法返回一个 Promise，当 Service Worker 成功注册时，这个 Promise 会 resolve，并将注册信息传递给 .then() 方法的回调函数。
      // 在这个回调函数中，我们可以处理成功注册的 Service Worker。在这个例子中，我们只是在控制台打印了一条成功注册的消息。
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
  // 综上所述，这段代码在页面加载完成后注册一个 Service Worker（如果浏览器支持），并在控制台打印关于注册成功或失败的消息。
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const Koa = require('koa');
// const Router = require('koa-router');
// const koaStatic = require('koa-static');
// const koaBodyparser = require('koa-bodyparser');
// const axios = require('axios');

// const app = new Koa();
// const router = new Router();

// router.get('/', async (ctx) => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//   ctx.body = response.data;
// });

// app.use(koaBodyparser());
// app.use(router.routes());
// app.use(koaStatic('public'));

// app.listen(3000);
// console.log('Server running at http://localhost:3000/');






// -------------------------------------------------------------------------------------------------------------------------------

// Koa 可以做什么事？
// Koa是一个基于Node.js的Web框架，它的核心是中间件（Middleware）机制，能够方便地实现诸如路由分发、参数解析、静态文件服务、身份验证等常见Web开发任务。
// Koa的设计理念是简洁、灵活，强调“只做一个很小的事情，但做得很好”，并且通过async/await语法支持更加优雅的异步编程方式。
// 除此之外，Koa还提供了丰富的插件和中间件，可以满足各种不同的开发需求。

const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

// ctx 是什么？
// 在Koa中，ctx是一个上下文对象，代表了请求和响应。ctx包含了request和response两个属性。
// 通过ctx.request和ctx.response可以分别获取到请求和响应对象。同时，ctx还包含了一些其他属性和方法，例如ctx.body、ctx.params等。
// ctx是在每个中间件中作为第一个参数传入的，中间件可以通过ctx来访问请求和响应对象，并进行相关操作。

// ctx的属性和方法
// 在Koa中，ctx代表着当前请求和响应的上下文。它是一个包含请求和响应信息的 JavaScript 对象，包含许多属性和方法，例如：

// ctx.request：封装了当前 HTTP 请求的请求头和请求体等信息，是一个 Koa Request 对象。
// ctx.response：封装了当前 HTTP 响应的响应头和响应体等信息，是一个 Koa Response 对象。
// ctx.cookies：用于获取和设置 HTTP 请求中的 Cookies。
// ctx.throw：用于抛出异常，例如抛出 404 错误等。
// ctx.params：用于获取路由参数。
// ctx.query：用于获取查询参数。
// ctx.redirect：用于进行 URL 重定向。
// ctx.state：用于在请求间共享数据。
// ctx.body：HTTP 响应体的主体部分。
// ctx.method：HTTP 请求方法，如 GET、POST 等。
// ctx.path：用于表示请求 URL 的路径部分。例如，对于 URL 为 http://localhost:3000/todos 的请求，ctx.path 将返回 /todos。
// 还有很多其他的属性和方法可以参考 Koa 的官方文档。

// 注册Service Worker
app.use(async (ctx, next) => {
    // 它会拦截 '/service-worker.js' 的请求并返回一个包含缓存逻辑的 JavaScript 文件。
  if (ctx.path === '/service-worker.js') {
    ctx.set('Service-Worker-Allowed', '/');
    ctx.type = 'application/javascript';
    // 这个 Service Worker 文件定义了一个名为 my-app-cache-v1 的缓存，并缓存了三个 URL：
    // 根目录
    // index.html 文件
    // app.js 文件

    // 同时，它还监听了 fetch 事件，并在缓存中查找响应，如果找到了就直接返回缓存的响应，否则发送网络请求并将其加入缓存。
    ctx.body = `
      const CACHE_NAME = 'my-app-cache-v1';
      const urlsToCache = [
        '/',
        '/index.html',
        '/app.js'
      ];

      self.addEventListener('install', event => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
        );
      });

      self.addEventListener('fetch', event => {
        event.respondWith(
          caches.match(event.request)
            .then(response => {
              return response || fetch(event.request);
            })
        );
      });
    `;
  } else {
    await next();
  }
});

// 提供静态文件
app.use(serve(__dirname + '/public'));

// 启动服务器
app.listen(3000);

// service-worker.js必须放在静态资源public中

// 在基于React的项目中，通常静态资源位于public文件夹中。这个文件夹包含了所有公开可访问的资源，例如图像、音频、CSS、JavaScript等。
// 当使用create-react-app创建项目时，默认情况下会生成public文件夹。

// 如果您使用了create-react-app，则不需要单独配置静态资源的访问。
// create-react-app会自动处理这些资源，将它们包含在构建输出中，并通过Web服务器提供。

// 如果您使用了自定义的服务器，比如Express，您需要使用express.static中间件来设置静态资源的访问。例如，以下代码配置了静态资源目录：
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
// -----------------------------------------------------------------------------------------------
// Service Workers是什么？主要用法有哪些？在什么情况下需要使用到Service Workers？

// Service Workers 是一种浏览器技术，它允许开发者在用户的设备上运行一个持久的、可编程的网络代理。
// Service Workers 可以在浏览器后台独立运行，与网页无关，它们可以在没有网页或用户交互的情况下运行。
// Service Workers 的主要目标是实现可靠的性能以及使网站在脱机（offline）状态下可用。

// 主要用法：

// 1.离线缓存（Offline caching）： Service Workers 可以拦截网络请求并从缓存中提供响应，使得应用在脱机状态下也可以工作。这对于提供更好的用户体验非常重要，特别是在网络不稳定或完全脱机的情况下。
// 2.推送通知（Push notifications）： Service Workers 可以接收来自服务器的推送通知，即使用户当前没有打开应用。这使得应用可以在后台为用户提供实时的信息和通知。
// 3.背景同步（Background sync）： Service Workers 允许在后台执行一些任务，例如在用户离线时将数据发送到服务器，或者在用户重新连接到互联网时获取新数据。
// 4.网络请求代理（Network request proxying）： Service Workers 可以拦截网络请求并修改请求或响应，实现自定义的缓存策略、路由策略等。
// -----------------------------------------------------------------------------------------------

// `在什么情况下需要使用到 Service Workers：
// 1.提高应用的性能： 通过缓存静态资源和API响应，Service Workers 可以减少从服务器获取数据的延迟，加快页面的加载速度，提高应用性能。
// 2.提高应用的可靠性： 在用户设备上缓存资源，使得应用在网络不稳定或完全脱机的情况下仍然可用。
// 3.实现离线功能： 对于那些希望在离线状态下继续提供一定功能的应用，Service Workers 可以使得这些应用在无网络连接时仍然可以访问缓存的资源和数据。
// 4.接收推送通知： 如果你希望在用户没有打开应用时向他们发送通知，Service Workers 可以使你的应用在后台接收来自服务器的推送通知。
// 5.在后台同步数据： Service Workers 可以在后台执行一些任务，例如在用户离线时将数据发送到服务器，或者在用户重新连接到互联网时获取新数据。



// -----------------------------------------------------------------------------------------------

// 要在你的项目中使用Service Workers实现离线支持，需要遵循以下步骤：

// 1.注册Service Worker
// 在你的应用程序中注册Service Worker。Service Worker是一个独立的线程，用于处理网络请求和缓存资源。
// 你可以使用navigator.serviceWorker.register()方法在应用程序中注册Service Worker。

// 2.缓存应用资源
// 在注册Service Worker后，你可以使用Cache API缓存应用资源，包括HTML、CSS、JavaScript文件和图像等资源。
// 你可以使用caches对象来存储和检索缓存数据。
// 当Service Worker接收到fetch事件时，它会首先检查缓存以查找匹配的资源，如果缓存中没有找到，则会向网络发出请求。

// 3.处理待办事项的添加、编辑和删除操作

// 在离线状态下，你需要处理待办事项的添加、编辑和删除操作。
// 可以使用IndexedDB将待办事项保存到客户端本地存储，并在应用程序重新连接到网络时将它们同步到服务器上
// 。当应用程序处于离线状态时，你可以在IndexedDB中保存待办事项并在网络重新连接后将其同步到服务器上。

// 你可以使用以下工具和库来实现Service Workers和离线支持：

// `Workbox：Google提供的库，用于管理Service Workers和缓存资源等任务。
// `sw-toolbox：Google提供的库，用于缓存应用程序资源并处理网络请求。
// `IndexedDB：用于在客户端存储数据，包括待办事项和应用程序配置等。
// `PouchDB：开源的JavaScript数据库，支持浏览器和Node.js环境，用于在离线状态下处理待办事项和同步数据。

// 在实现Service Workers和离线支持时，需要注意以下事项：

// 缓存的数据可能会过时，因此需要定期检查并更新缓存。
// 在缓存资源时，应该遵循一定的命名约定，以便清除旧的缓存。
// 在使用IndexedDB时，需要处理数据冲突和同步等问题。
// 当应用程序重新连接到网络时，需要确保已经保存的待办事项被同步到服务器上。

// -----------------------------------------------------------------------------------------------


// 要使用Service Worker一定要开启自己的服务器吗？

// 是的，要使用Service Worker需要在一个Web服务器上运行，因为Service Worker需要使用HTTPS协议来进行安全的网络通信。
// 如果你只是在本地运行一个HTML文件，则无法使用Service Worker。

// 为什么是和网络之间的代理？而不是与服务器之间的代理?

// Service Worker 之所以被称为是一个在浏览器和网络之间的代理，
// 是因为 Service Worker 可以拦截浏览器向服务器发送的网络请求，也可以拦截服务器返回的响应，并且可以对这些请求和响应进行处理。
// Service Worker 可以将网络请求缓存到浏览器的缓存中，也可以将响应结果缓存到缓存中，
// 这样当下次请求同一个资源时，Service Worker 就可以直接从浏览器的缓存中获取结果，而不需要向服务器重新发送请求。
// 同时，Service Worker 还可以将离线状态下的请求和响应进行处理，这样用户即使在离线状态下也可以继续使用应用程序。
// 因此，可以说 Service Worker 是一个在浏览器和网络之间的代理。
// 在实现缓存功能时，Service Worker 会拦截浏览器发出的请求，并尝试从缓存中获取所需的资源，而不是向服务器发送请求。
// 如果该资源已被缓存，则 Service Worker 会将缓存的资源返回给浏览器，否则它将向服务器发送请求。
// 因此，Service Worker 作为一个代理可以帮助我们管理缓存、离线支持等功能，使得 Web 应用能够更加快速和可靠。



// 定义缓存的名称。当更新应用程序时，可以更改此名称以强制客户端更新缓存。
const CACHE_NAME = 'my-todo-app-v1';
// 定义要缓存的静态资源的数组。这些资源在Service Worker安装时会被缓存。
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/audio/music.mp3',
];
// 监听install事件，该事件在Service Worker安装时触发。
// self指的是service worker自身
self.addEventListener('install', (event) => {
  // 这里使用event.waitUntil()确保Service Worker不会在缓存所有资源之前完成安装。
  event.waitUntil(
    // 打开指定名称的缓存，如果不存在则创建一个新的缓存。这个方法返回一个 Promise，当缓存被打开时，Promise 解析为这个缓存对象。
// -------------------------------------------------------------------------------------------------------------------------

    // 在这段代码中，涉及到两个主要的概念：caches 和 cache。

    // caches: caches 是一个全局对象，代表了 Service Worker 的缓存存储，它允许您访问和管理 Service Worker 作用域内的所有缓存。
    // 通过 caches 对象，您可以执行诸如打开（caches.open()）、删除（caches.delete()）或检索缓存（caches.match()）的操作。
    // 注意，caches 是 Service Worker 的全局对象，只能在 Service Worker 脚本中访问。

    // cache: 在上述代码中，cache 是一个局部变量，代表一个特定的缓存实例。
    // 当您调用 caches.open(CACHE_NAME) 时，会返回一个 Promise，该 Promise 解析为一个缓存实例。
    // 这个实例表示特定名称（在这里是 CACHE_NAME）的缓存。
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      // 将指定的静态资源添加到缓存中。返回一个 Promise，当所有资源都成功添加到缓存时，Promise 将解析。
      return cache.addAll(STATIC_ASSETS);
    })
  );
});
// 监听fetch事件，该事件在客户端发起请求时触发。
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果找到缓存的响应，直接返回它
      if (response) {
        return response;
      }

      // 否则，创建一个新的请求，以保留 CORS 模式
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest, { mode: 'cors' })
        .then((fetchResponse) => {
          // 检查我们是否收到了一个有效响应
          if (
            !fetchResponse ||
            fetchResponse.status !== 200 ||
            fetchResponse.type !== 'basic'
          ) {
            return fetchResponse;
          }

          // 如果我们收到了一个有效响应，则将其添加到缓存中
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return fetchResponse;
        });
    })
  );
});





// 监听activate事件，该事件在Service Worker激活时触发。在这里，我们可以清理旧的缓存
self.addEventListener('activate', (event) => {
  // 定义一个白名单数组，其中包含要保留的缓存名称。在这种情况下，我们只保留当前版本的缓存。
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    // 获取所有缓存的名称列表。caches.keys() 方法返回一个 Promise，该 Promise 解析为一个 Cache 名称的字符串数组，代表浏览器中所有可用的 Cache。
    caches.keys().then((cacheNames) => {
      // 等待所有缓存操作完成。
      return Promise.all(
        // 遍历所有缓存名称，检查它们是否在白名单中。如果不在白名单中，则删除该缓存。
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



// 全局caches与局部cache的属性和方法大全
// 全局 caches 和局部 cache 都是用于存储缓存数据的对象，它们有以下相似和不同的属性和方法：

// 相似的属性和方法：
// cache.match(request)：返回与请求匹配的第一个缓存结果。
// cache.matchAll(request, options)：返回与请求匹配的所有缓存结果。
// cache.add(request)：添加请求到缓存中，如果缓存中已存在该请求则忽略。
// cache.addAll(requests)：添加一组请求到缓存中，如果缓存中已存在其中的某个请求则忽略。
// cache.put(request, response)：将响应添加到缓存中，如果已经存在则替换。
// cache.delete(request, options)：删除与请求匹配的第一个缓存结果。
// cache.keys(request, options)：返回与请求匹配的所有缓存结果的 key 列表。

// 不同的属性和方法：
// 全局 caches：

// caches.open(cacheName)：打开指定名称的缓存，返回一个 Promise。
// caches.has(cacheName)：判断是否存在指定名称的缓存，返回一个 Promise。
// caches.delete(cacheName)：删除指定名称的缓存，返回一个 Promise。
// caches.keys()：返回一个包含所有缓存名称的 Promise。
// caches.match(request, options)：返回与请求匹配的第一个缓存结果，可以使用 options.ignoreSearch 选项来忽略查询参数的差异。

// 局部 cache：
// cache.name：缓存的名称。
// cache.addAll(requests)：将一组请求添加到缓存中，如果存在不可缓存的请求则整个操作会失败。
// cache.keys()：返回一个包含所有缓存键值对的 Promise，每个键值对是一个 Request 和对应的 Response。
// 需要注意的是，局部 cache 只能在 Service Worker 范围内使用，而全局 caches 可以在任意 JavaScript 环境中使用。



// Service Workers是什么？主要用法有哪些？在什么情况下需要使用到Service Workers？

// Service Workers 是一种浏览器技术，它允许开发者在用户的设备上运行一个持久的、可编程的网络代理。Service Workers 可以在浏览器后台独立运行，与网页无关，它们可以在没有网页或用户交互的情况下运行。Service Workers 的主要目标是实现可靠的性能以及使网站在脱机（offline）状态下可用。

// 主要用法：

// 1.离线缓存（Offline caching）： Service Workers 可以拦截网络请求并从缓存中提供响应，使得应用在脱机状态下也可以工作。这对于提供更好的用户体验非常重要，特别是在网络不稳定或完全脱机的情况下。
// 2.推送通知（Push notifications）： Service Workers 可以接收来自服务器的推送通知，即使用户当前没有打开应用。这使得应用可以在后台为用户提供实时的信息和通知。
// 3.背景同步（Background sync）： Service Workers 允许在后台执行一些任务，例如在用户离线时将数据发送到服务器，或者在用户重新连接到互联网时获取新数据。
// 4.网络请求代理（Network request proxying）： Service Workers 可以拦截网络请求并修改请求或响应，实现自定义的缓存策略、路由策略等。

// `在什么情况下需要使用到 Service Workers：
// 1.提高应用的性能： 通过缓存静态资源和API响应，Service Workers 可以减少从服务器获取数据的延迟，加快页面的加载速度，提高应用性能。
// 2.提高应用的可靠性： 在用户设备上缓存资源，使得应用在网络不稳定或完全脱机的情况下仍然可用。
// 3.实现离线功能： 对于那些希望在离线状态下继续提供一定功能的应用，Service Workers 可以使得这些应用在无网络连接时仍然可以访问缓存的资源和数据。
// 4.接收推送通知： 如果你希望在用户没有打开应用时向他们发送通知，Service Workers 可以使你的应用在后台接收来自服务器的推送通知。
// 5.在后台同步数据： Service Workers 可以在后台执行一些任务，例如在用户离线时将数据发送到服务器，或者在用户重新连接到互联网时获取新数据。


const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});









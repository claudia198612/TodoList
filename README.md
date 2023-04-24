# TodoList 项目 :smile: 

TodoList PWA是一个基于React、React-Redux、JS、Ant Design、IndexedDB、Service Worker和Firebase部署的Web应用程序，可帮助用户管理日常任务。除了基本的待办事项管理功能，该应用程序还具有标记完成、编辑、删除、筛选和定时提醒等功能，以提高用户的效率和体验。

作为一款渐进式Web应用程序（PWA），TodoList PWA可在各种平台和设备上提供类似于原生应用程序的用户体验。这是通过利用PWA技术的诸多优点实现的，例如离线访问、快速加载、缓存管理、消息推送等。

此外，TodoList PWA还使用了Firebase的实时数据库和消息推送功能，以帮助用户在多个设备之间同步数据和获得即时通知。该应用程序还通过使用IndexedDB和Service Worker来提供离线访问和缓存管理，从而允许用户在离线时使用应用程序。

TodoList PWA是一个功能强大、易于使用和高度可定制的任务管理应用程序，可帮助用户提高生产力、组织时间和保持专注。

## 安装和使用🚀

### 本地安装

1. 在终端中进入项目目录。✅
2. 运行 `npm install` 安装项目依赖。✅
3. 运行 `npm start` 启动项目。✅
4. 在浏览器中访问 `http://localhost:3000` 即可使用。✅

### 服务器访问

使用Chrome浏览器<img src="C:\Users\Lee\AppData\Roaming\Typora\typora-user-images\image-20230424061203637.png" alt="image-20230424061203637" style="zoom:5%;" />访问https://todolist-d3b87.web.app/ 

### 使用

#### 添加待办事项

点击添加按钮

#### 查看待办事项列表

在页面上方的标签栏中选择要查看的待办事项列表，支持全部、未完成和已完成三种选项。

#### 标记已完成的待办事项

1. 在待办事项列表中，点击待办事项左侧的复选框，将其标记为已完成状态。
2. 再次点击复选框，将其标记为未完成状态。

#### 编辑待办事项的标题

1. 点击右边编辑按钮，将其变为可编辑状态。
2. 修改标题后，使编辑区域失去焦点，完成编辑。

#### 删除待办事项

在待办事项列表中，点击待办事项右侧的删除按钮，将其从列表中删除。

#### 过滤待办事项列表

在页面上方的标签栏中选择要查看的待办事项列表，支持全部、未完成和已完成三种选项。

#### 通过 Firebase 实现消息推送功能

当您在添加新待办事项时，将通过 Firebase 向您发送消息推送通知，以提醒关注您的待办事项。(使用Chrome访问https://todolist-d3b87.web.app/ , 并确保浏览器是支持和允许消息推送的)

#### 播放音乐的功能

在页面底部的音乐控制栏中，可以播放/暂停音乐。

#### 定时器与消息推送提醒的功能

当您在添加新待办事项时，可以选择添加一个倒计时时间。距离倒计时的时间还差5分钟的时候，将通过 Firebase 向您发送消息推送通知，以提醒您关注您的待办事项。

## 功能列表📜

- 添加待办事项。
- 查看待办事项列表。
- 标记已完成的待办事项。
- 编辑待办事项的标题。
- 删除待办事项。
- 过滤待办事项列表。
- 通过 Firebase 实现消息推送功能。
- 播放音乐功能。
- 通过 IndexedDB 存储待办事项数据。
- 通过 Service Worker 实现缓存与离线访问。
- 通过 Firebase 部署项目，通过域名访问项目。(使用Chrome访问https://todolist-d3b87.web.app/ , 并确保浏览器是支持和允许消息推送的)

## 技术栈💡

- React：一个流行的 JavaScript 库，用于构建用户界面。
- React-Redux：一个用于管理应用程序状态的库，它基于 Redux，并提供了更好的与 React 集成的 API。
- JS：JavaScript 是一种广泛使用的编程语言，用于开发 Web 应用程序。
- Ant Design：一个基于 React 的 UI 组件库，提供了大量预先设计好的组件，方便快速构建漂亮的用户界面。
- IndexedDB：一种在浏览器中存储和检索结构化数据的 API。项目使用 IndexedDB 来存储 TodoList 应用程序中的数据。
- Service worker：一种 Web Worker，用于在 Web 应用程序运行时提供后台脚本功能。项目使用 service worker 来实现离线访问和缓存功能。
- Firebase 部署：Firebase 是一个由 Google 提供的移动和 Web 应用程序开发平台，包括数据库、身份验证、分析和云存储等服务。你的项目使用 Firebase 部署技术来将应用程序部署到云端。
- 消息推送技术：使用 Firebase Cloud Messaging（FCM）来实现 Web 应用程序的消息推送功能。FCM 是一种跨平台消息传递解决方案，可以向 Android、iOS 和 Web 应用程序发送消息。在你的项目中，当你添加一个新的 todo 项时，会向用户发送消息推送通知。

## 开发环境🖥️

- 操作系统：Windows
- 编辑器：Visual Studio Code
- 浏览器：Google Chrome

## 贡献💕

欢迎大家为项目做出贡献，包括但不限于提交 Bug 报告、提出改进建议和撰写代码。

## 许可📄

本项目采用 [MIT 许可证](https://opensource.org/licenses/MIT)，详情请见 `LICENSE` 文件。


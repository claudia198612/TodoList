// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtVj3TvFegQc3yFaTW9KE56DjTWdhGup0",
  authDomain: "todolist-d3b87.firebaseapp.com",
//   databaseURL: "https://todolist-d3b87-default-rtdb.firebaseio.com",
  projectId: "todolist-d3b87",
  storageBucket: "todolist-d3b87.appspot.com",
  messagingSenderId: "900706430997",
  appId: "1:900706430997:web:a7ad5dc03c0bb36c0bde1c",
  measurementId: "G-T7JQBW1M3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// 请求通知权限
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");

    // 获取 FCM 令牌
    getToken(messaging, { vapidKey: 'BA4fB06o5R5uqiEhyRxPEpFpiXzzrARr5oBmdbc-CInVW0PA8ve0aWWkMx8i6Qx5j7c9jz0ZtCPtaD7YSybLPg4' })
      .then((token) => {
        console.log("FCM token:", token);
      })
      .catch((err) => {
        console.error("Error getting FCM token:", err);
      });

  } else {
    console.error("Notification permission denied.");
  }
});

// 监听消息事件
onMessage(messaging, (payload) => {
  const title = payload.notification.title;
  const body = payload.notification.body;

  // const notificationDiv = document.createElement("div");
  // notificationDiv.style.backgroundColor = "#f0f0f0";
  // notificationDiv.style.border = "1px solid #ccc";
  // notificationDiv.style.borderRadius = "5px";
  // notificationDiv.style.padding = "10px";
  // notificationDiv.style.marginBottom = "10px";
  // notificationDiv.style.maxWidth = "300px";

  // const titleElement = document.createElement("strong");
  // titleElement.textContent = title;
  // notificationDiv.appendChild(titleElement);

  // const bodyElement = document.createElement("p");
  // bodyElement.textContent = body;
  // notificationDiv.appendChild(bodyElement);

  // const container = document.getElementById("notifications-container");
  // container.appendChild(notificationDiv);


  const title1 = title;
  const options = {
    body: payload.notification.body,
    // icon: payload.notification.icon || "path/to/default/icon.png", // 如果消息中没有提供图标，可以在此处提供默认图标
  };

  // 创建并显示通知
  const Noti = new Notification(title1, options);
  console.log(Noti);

  // 自动删除消息
  // setTimeout(() => {
  //   container.removeChild(notificationDiv);
  // }, 5000);
});

export { app, analytics, messaging };
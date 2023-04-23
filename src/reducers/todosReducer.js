import { updateIndexedDB } from "../indexedDB/db";
import { messaging } from '../../src/firebase';
import { getToken } from 'firebase/messaging';
const initialState = {
  id:1,
  setData: [
  ],
  setShowData: [
  ],
  setSearchText: "",
};

  // 添加初始数据到 IndexedDB



  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_DATA":
  
        // 覆盖
        return {  ...state, ...action  };
      case "SET_SHOW_DATA":
        return {  ...state, ...action  };
      case "SET_SEARCH_TEXT":
        return { ...state, ...action };
      case "TOGGLE_COMPLETED":{
        const updatedSetData = state.setData.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        );
        updateIndexedDB(updatedSetData);
        return {
          ...state,
          setData: state.setData.map((item) =>
            item.id === action.id ? { ...item, completed: !item.completed } : item
          ),
        };
      }
      case "UPDATE_TODO":{
        const updatedSetData = state.setData.map((item) =>
          item.id === action.id ? { ...item, title: action.newTitle} : item
        );
        updateIndexedDB(updatedSetData);
        return {
          ...state,
          setData: state.setData.map((item) =>
            item.id === action.id ? { ...item, title: action.newTitle } : item
          ),
        };
      }

      case "DELETE_TODO":{
        const updatedSetData = state.setData.filter((item) => item.id !== action.id);
        updateIndexedDB(updatedSetData);
        return {
          ...state,
          setData: state.setData.filter((item) => item.id !== action.id),
        };
      }
   
      
      case "ADD_TODO": {
        const updatedSetData = [
          ...state.setData,
          { ...action.todo, selectedTime: state.selectedTime },
        ];
        updateIndexedDB(updatedSetData);

        return {
          ...state,
          setData: updatedSetData,
          setShowData: [...state.setShowData, { ...action.todo, selectedTime: state.selectedTime }],
        };
      }

      case "LOAD_DATA_FROM_DB":
        return { ...state, setData: action.data, setShowData: action.data };
      case "INITIALIZE_STATE_FROM_DB":
        return {
          ...state,
          setData: action.data,
          setShowData: action.data,
        };
      case "SET_SELECTED_TIME": {
        const updatedSetData = state.setData.map((item) =>
          item.id === action.id ? { ...item, selectedTime: action.selectedTime} : item
        );
        updateIndexedDB(updatedSetData);
        const updatedSetData1 = updatedSetData.filter((item) =>
          item.id === action.id
        )

        // const updatedSetData1 = updatedSetData.filter
        // 触发回调函数，在倒计时结束时触发 console.log()
        const countdownCallback = () => {


          getToken(messaging)
          .then((token) => {
            // 将 token 与新的 todo 项一起发送到服务器
            // 服务器将根据 token 与 todo 项信息发送消息推送通知
            const payload = {
              token,
              todo: {
                // 在此处添加新的 todo 项信息
                title:updatedSetData1[0].title + '还剩不到5分钟啦!'
              },
            };
      
            // Replace this with your Cloud Function URL
            const cloudFunctionUrl = 'https://us-central1-todolist-d3b87.cloudfunctions.net/sendNotification';
      
            // 发送 payload 到 Cloud Function
            fetch(cloudFunctionUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
              })
              .catch((error) => {
                console.error('Error sending notification:', error);
              });
          })

        };
        // 计算倒计时毫秒数
        let secondsToCountdown = action.selectedTime * 1000
        // const now = new Date();
        // const nowhours = now.getHours();
        // const nowminutes = now.getMinutes();
        // const nowseconds = now.getSeconds();
        // console.log('nowminutes:' + nowminutes);
        // 300 * 1000 毫秒 -- 5分钟
        if(secondsToCountdown <= 300 * 1000){
          secondsToCountdown = 0;
        }else{
          secondsToCountdown -= 300 * 1000;
        }
        
        // 设置定时器，倒计时结束时触发回调函数
        setTimeout(countdownCallback, secondsToCountdown);

        return {
          ...state,
          setData: state.setData.map((item) =>
            item.id === action.id ? { ...item, selectedTime: action.selectedTime } : item
          ),
        };
      }
      default:
        return state;
    }
  };
  
  

  


  export default todosReducer;
  
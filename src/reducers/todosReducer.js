import { updateIndexedDB } from "../indexedDB/db";

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
          item.id === action.id ? { ...item, title: action.newTitle } : item
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
   
      
      case "ADD_TODO":{
        const updatedSetData = [...state.setData, action.todo];
        updateIndexedDB(updatedSetData);
        return {
          ...state,
          setData: [...state.setData, action.todo],
          setShowData: [...state.setShowData, action.todo],
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
      default:
        return state;
    }
  };
  
  

  


  export default todosReducer;
  
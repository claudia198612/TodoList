import {getAllTodosFromDB} from '../indexedDB/db'

export const loadDataFromDB = (data) => ({
  type: "LOAD_DATA_FROM_DB",
  data,
});

export const setData = (data) => ({
  // 存储汇总所有的事件
    type: "SET_DATA",
    setData: data,
  });

export const setShowData = (data) => ({
  // 用来存储展示的事件
    type: "SET_SHOW_DATA",
    setShowData: data,
  });
  
export const setSearchText = (text) => ({
  // 用来存储搜索框里的内容
    type: "SET_SEARCH_TEXT",
    setSearchText: text,
  });

  export const toggleCompleted = (id) => ({
    type: "TOGGLE_COMPLETED",
    id,
  });
  
  export const updateTodo = (id, newTitle) => ({
    type: "UPDATE_TODO",
    id,
    newTitle,
  });

  export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id,
  });

  export const addTodo = (todo) => ({
    type: "ADD_TODO",
    todo,
  });

  export const initializeStateFromDB = () => {
    return async (dispatch) => {
      const todosFromDB = await getAllTodosFromDB();
      dispatch({
        type: "INITIALIZE_STATE_FROM_DB",
        data: todosFromDB,
      });
    };
  };
  

  export const SET_SELECTED_TIME = "SET_SELECTED_TIME";
  export const setSelectedTime = (id,time) => ({
    type: SET_SELECTED_TIME,
    id,
    selectedTime: time,
  });
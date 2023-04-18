const initialState = {
  setData: [
      {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
        },
        {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
        },
        {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
        }
    ],
    setShowData: [],
    setSearchText: "假设自己搜索输入的值",
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_DATA":
        // 覆盖
        return {  ...state, ...action  };
      case "SET_SHOW_DATA":
        return {  ...state, action  };
      case "SET_SEARCH_TEXT":
        return { ...state, action };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  
const initialState = {
    setData: [{
      "userId": 1,
      "id": 1,
      "title": "写作业",
      "completed": false
      }],
    setShowData: [{
      "userId": 1,
      "id": 1,
      "title": "写作业",
      "completed": false
      }],
    setSearchText: "",
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_DATA":
        // 覆盖
        return {  ...state, ...action  };
      case "SET_SHOW_DATA":
        return {  ...state, ...action  };
      case "SET_SEARCH_TEXT":
        return { ...state, ...action };
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          setData: state.setData.map((item) =>
            item.id === action.id ? { ...item, completed: !item.completed } : item
          ),
        };
      case "UPDATE_TODO":
        return {
          ...state,
          setData: state.setData.map((item) =>
            item.id === action.id ? { ...item, title: action.newTitle } : item
          ),
        };
      case "DELETE_TODO":
        return {
          ...state,
          setData: state.setData.filter((item) => item.id !== action.id),
        };
      
      case "ADD_TODO":
        return {
          ...state,
          setData: [...state.setData, action.todo],
          setShowData: [...state.setShowData, action.todo],
        };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  


export const handleAddTodo = (addTodo, newTodo) => {
  addTodo(newTodo);
  // 当新的 todo 项被创建时，向用户发送消息推送通知
};
  
export const handleCompletedFilter = (sendActionShow, setData) => {
const completedTodos = setData.filter((todo) => todo.completed === true);
sendActionShow(completedTodos);
};

export const handleUncompletedFilter = (sendAction, setData) => {
const filteredData = setData.filter((todo) => !todo.completed);
sendAction(filteredData);
};

export const handleAllFilter = (sendAction, setData) => {
const filteredData = setData;
sendAction(filteredData);
};

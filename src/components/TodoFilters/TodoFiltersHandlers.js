export const handleAddTodo = (addTodo, newTodo) => {
    addTodo(newTodo);
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

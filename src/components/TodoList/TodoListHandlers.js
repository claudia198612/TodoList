// import store from '../../store'
// import { setShowData, toggleCompleted, updateTodo, deleteTodo } from '../../actions/todos';

// 由于在handler中使用了this关键字，你需要将其绑定到组件实例中，或者使用箭头函数来避免this指向的问题。
export const handleInputBlurHandler = function() {
    this.setState({ editingTodoId: null });
  };
  
  export const handleDeleteHandler = function(id) {
    this.props.deleteTodo(id);
  };
  
  export const handleToggleHandler = function(item) {
    this.props.toggleCompleted(item.id);
    this.props.sendAction(this.props.todos.setData);
    console.log(this.props.todos);
    this.setState({});
  };
  
  export const handleEditHandler = function(item) {
    this.setState({ editingTodoId: item.id });
  };
  
  export const handleInputChangeHandler = function(event, item) {
      this.props.updateTodo(item.id, event.target.value);
      this.setState({ editingTodoId: null });
  };
  
  

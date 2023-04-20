import React from "react";
import store from '../../store'
import { List,Button, Space} from 'antd';
import { connect } from "react-redux";
import {setShowData,toggleCompleted,updateTodo,deleteTodo } from '../../actions/todos'
import {  handleInputBlurHandler,
          handleDeleteHandler,
          handleToggleHandler,
          handleEditHandler,
          handleInputChangeHandler 
        } from './TodoListHandlers';

class TodoList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editingTodoId: null,
    };
    
    
  }
  componentDidUpdate(prevProps) {
    if (this.props.todos.setData !== prevProps.todos.setData) {
      this.props.sendAction(this.props.todos.setData);
    }
  }

  componentDidMount(){
      store.subscribe(()=>{
      })
  }
  // 将TodoList中的handleInputBlur方法改为handleInputBlurMethod，
  // 将TodoListHandlers中的handleInputBlur方法改为handleInputBlurHandler。
  // 这样两个方法的名称就不同了，可以方便区分。


  // 由于Handler方法在TodoListHandlers.js中定义
  // 它并不自动绑定到组件实例的上下文。这意味着在Handler方法内部，如果你尝试访问this，
  // 它将是undefined。
  // 为了解决这个问题，需要在组件的构造函数中使用bind(this)将方法绑定到组件实例。
  handleInputBlurMethod = () => {
    handleInputBlurHandler.call(this);
  };

  handleDeleteMethod = (id) => {
    handleDeleteHandler.call(this, id);
  };

  handleToggleMethod = (item) => {
    handleToggleHandler.call(this, item);
  };

  handleEditMethod = (item) => {
    handleEditHandler.call(this, item);
  };

  handleInputChangeMethod = (event, item) => {
    handleInputChangeHandler.call(this, event, item);
  };

    render(){
        return (
          <>
            <List
            style={{ width: '500px' }}
            bordered
            dataSource={this.props.todos.setShowData}
            renderItem={(item) => (
              <List.Item style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={item.completed} onChange={() => this.handleToggleMethod(item)}></input>
                        {this.state.editingTodoId === item.id ? (
                  <input
                    defaultValue={item.title}
                    onKeyPress={(event) => this.handleInputChangeMethod(event, item)}
                    onBlur={this.handleInputBlurMethod}
                  />
                ) : (
                  item.title
                )}
                <Space wrap>
                  <Button 
                  type="primary" 
                  style={{ marginLeft: 'auto'}} 
                  onClick={() => this.handleEditMethod(item)} >编辑</Button>
                  <Button 
                  type="primary" 
                  danger 
                  style={{ marginLeft: 'auto' }} 
                  onClick={() => this.handleDeleteMethod(item.id)}>删除</Button>
                </Space>
              </List.Item>
            )}
          />
          </>
          );
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
      sendAction:(data)=>{
        dispatch(setShowData(data))
      },
      toggleCompleted: (id) => {
        dispatch(toggleCompleted(id));
      },
      updateTodo: (id, newTitle) => {
        dispatch(updateTodo(id, newTitle));
      },
      deleteTodo: (id) => {
        dispatch(deleteTodo(id));
      },
    }
  }
  const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
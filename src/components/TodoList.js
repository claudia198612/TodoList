import React from "react";
import store from '../store'
import { List,Button, Space} from 'antd';
import { connect } from "react-redux";
import {setShowData,toggleCompleted,updateTodo,deleteTodo } from '../actions/todos'

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
  handleInputBlur = () => {
    this.setState({ editingTodoId: null });
  };
  handleDelete = (id) => {
    this.props.deleteTodo(id);
  };

    componentDidMount(){
        store.subscribe(()=>{
        })
    }
    handleToggle = (item) => {
      this.props.toggleCompleted(item.id);
      this.props.sendAction(this.props.todos.setData);
      console.log(this.props.todos)
      this.setState({})

    };
    handleEdit = (item) => {
      this.setState({ editingTodoId: item.id });
    };
    handleInputChange = (event, item) => {
      if (event.key === "Enter") {
        this.props.updateTodo(item.id, event.target.value);
        this.setState({ editingTodoId: null });
        console.log(this.props);
      }
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
                <input type="checkbox" checked={item.completed} onChange={() => this.handleToggle(item)}></input>
                        {this.state.editingTodoId === item.id ? (
                  <input
                    defaultValue={item.title}
                    onKeyPress={(event) => this.handleInputChange(event, item)}
                    onBlur={this.handleInputBlur}
                  />
                ) : (
                  item.title
                )}
                <Space wrap>
                  <Button 
                  type="primary" 
                  style={{ marginLeft: 'auto'}} 
                  onClick={() => this.handleEdit(item)} >编辑</Button>
                  <Button 
                  type="primary" 
                  danger 
                  style={{ marginLeft: 'auto' }} 
                  onClick={() => this.handleDelete(item.id)}>删除</Button>
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
    // console.log(state)
    return state;
  };

  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
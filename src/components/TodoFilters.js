import React from "react";
import store from '../store'
import {  setShowData,addTodo } from "../actions/todos";
import { connect } from "react-redux";
// ({ data, setData, searchText,setshowData }) 
import { Button, Space } from 'antd';
class TodoFilters extends React.Component{
    success = this.props.todos.setData.filter(
      (todo) =>
        todo.title.toLowerCase().includes(this.props.todos.setSearchText.toLowerCase()) &&
        (todo.completed === true)
    );
  
    processing = this.props.todos.setData.filter(
    (todo) =>
      todo.title.toLowerCase().includes(this.props.todos.setSearchText.toLowerCase()) &&
      (todo.completed === false)
  );
    waiting = this.props.todos.setData.filter(
    (todo) =>
      todo
  );

    
  handleClick = (filterType) => {
    // ...
    if (filterType === "add") {
      const newTodo = {
        userId: 1,
        id: Date.now(),
        title: "",
        completed: false,
      };
      this.props.addTodo(newTodo);
    }

    if (filterType === "completed") {
      const completedTodos = this.props.todos.setData.filter(
        (todo) => todo.completed === true
      );
      this.props.sendActionShow(completedTodos);
    }


    let filteredData = [];
    if (filterType === "uncompleted") {
      filteredData = this.props.todos.setData.filter((todo) => !todo.completed);
      this.props.sendAction(filteredData);
    }
    
    if (filterType === "all") {
      filteredData = this.props.todos.setData;
      this.props.sendAction(filteredData);
    }
    
    // ...
  };


    componentDidMount(){
        store.subscribe(()=>{
            
            this.setState({})
        })
    }
    render(){
        return (
          
            <Space style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "400px", // 修改宽度为 400px
              margin:'20px'
            }}>
            <Button type="primary" onClick={() => this.handleClick("add")} style={{backgroundColor: '#E0E0E0',color: '#000000' }}>添加</Button>
            <Button type="primary" onClick={() => this.handleClick("completed")} style={{backgroundColor: '#E0E0E0',color: '#000000' }}>已完成</Button>
            <Button type="primary" onClick={() => this.handleClick("uncompleted")} style={{backgroundColor: '#E0E0E0',color: '#000000' }}>未完成</Button>
            <Button type="primary" onClick={() => this.handleClick("all")} style={{backgroundColor: '#E0E0E0',color: '#000000' }}>全部</Button>
            </Space>
          );
    }
    // #E0E0E0

  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      sendAction:(data)=>{
        dispatch(setShowData(data))
      },
      sendActionShow:(date)=>{
        dispatch(
            setShowData(date)
        );
    },
    addTodo: (todo) => {
      dispatch(addTodo(todo));
    },
    }
  }
  const mapStateToProps = (state) => {
    // console.log(state)
    return state;
  };
  export default connect(mapStateToProps,mapDispatchToProps)(TodoFilters)


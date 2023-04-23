import React from "react";
import store from '../../store'
import {  setShowData,addTodo } from "../../actions/todos";
import { connect } from "react-redux";
import { handleAddTodo, handleCompletedFilter, handleUncompletedFilter, handleAllFilter } from './TodoFiltersHandlers';

import { Button, Space } from 'antd';
class TodoFilters extends React.Component{
   
  handleClick = (filterType) => {
    // ...
    if (filterType === "add") {
      const newTodo = {
        userId: 1,
        id: Date.now(),
        title: "",
        completed: false,
        selectedTime:Infinity,
      };
      handleAddTodo(this.props.addTodo, newTodo);
      // console.log(this.props)
    }

    if (filterType === "completed") {
      handleCompletedFilter(this.props.sendActionShow, this.props.todos.setData);
    }
    
    
    if (filterType === "uncompleted") {
      handleUncompletedFilter(this.props.sendAction, this.props.todos.setData);
    }
    
    if (filterType === "all") {
      handleAllFilter(this.props.sendAction, this.props.todos.setData);
    }

    
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
              width: "600px", // 修改宽度为 400px
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


import React from "react";
import store from '../store'
import { setShowData } from "../actions/todos";



// ({ data, setData, searchText,setshowData }) 
import { Space, Tag } from 'antd';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
export default class TodoFilters extends React.Component{
    // 这里出了点问题，success、processing、waiting都是拿到的默认值，而不是请求得到的200个数组
    
    // success = store.getState().todos.setData.filter(
    //     (todo) =>
    //       todo
    //       .title.toLowerCase().includes(store.getState().todos.setSearchText.toLowerCase()) &&
    //       (todo.completed === true)
    //   );

      success = store.getState().todos.setData;

    processing = store.getState().todos.setData.filter(
      (todo) =>
        todo.title.toLowerCase().includes(store.getState().todos.setSearchText.toLowerCase()) &&
        (todo.completed === false)
    );
    waiting = store.getState().todos.setData.filter(
      (todo) =>
        todo
    );

    handleClick = (data) => {
        store.dispatch(setShowData(data));
        console.log("sucess:")
        console.log(this.success)
    }


    componentDidMount(){
        store.subscribe(()=>{
            
            this.setState({})
        })
    }
    render(){
        return (
            <>
            <Space size={[0, 8]} wrap>
            <Tag icon={<CheckCircleOutlined />} color="success"  onClick={()=>{this.handleClick(this.success)}}>
                Success
            </Tag>
            <Tag icon={<SyncOutlined spin />} color="processing" onClick={()=>{this.handleClick(this.processing)}}>
                Processing
            </Tag>
            <Tag icon={<ClockCircleOutlined />} color="default" onClick={()=>{this.handleClick(this.waiting)}}>
                All
            </Tag>
            </Space>
            </>
          );
    }

  }

//   onClick={(e) => setshowData(waiting)}


//   return (
//     <Space size={[0, 8]} wrap>
//       <Tag icon={<CheckCircleOutlined />} color="success" onClick={(e) => setshowData(success)}>
//         Success
//       </Tag>
//       <Tag icon={<SyncOutlined spin />} color="processing" onClick={(e) => setshowData(processing)}>
//         Processing
//       </Tag>
//       <Tag icon={<ClockCircleOutlined />} color="default" onClick={(e) => setshowData(waiting)}>
//         All
//       </Tag>
//     </Space>
//   );
import React from "react";
import store from '../store'
import { setSearchText } from "../actions/todos";
import { Space, Input } from 'antd';
const { Search } = Input;
// function TodoSearch({ searchText, setSearchText }) 
export default class TodoSearch extends React.Component{

    handleChange = ()=>{
        console.log(store.getState().todos.setSearchText)
        store.dispatch(setSearchText());
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
  

    render(){
        return (
            <>
            {/* <button onClick={this.handleChange}>检查搜索内容是否出来</button> */}

            <Space direction="vertical">
              <Search
                style={{ width: '500px' }}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={store.getState().todos.setSearchText}
                onChange={this.handleChange}
              />
          </Space>
          </>
          );
    }

  }
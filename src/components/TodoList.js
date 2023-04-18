import React from "react";
import store from '../store'
import { List} from 'antd';

export default class TodoList extends React.Component{


    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }

    render(){
        return (
            <List
            style={{ width: '500px' }}
            bordered
            dataSource={store.getState().todos.setData}
            renderItem={(item) => (
              <List.Item>
                <input type="checkbox" checked={item.completed}></input>
                {item.title}
              </List.Item>
            )}
          />
          );
    }

  }
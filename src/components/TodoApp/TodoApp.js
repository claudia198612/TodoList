import React from "react";
import { Provider } from 'react-redux';
import store from '../../store';
import TodoFilters from '../TodoFilters/TodoFilters'
import TodoList from '../TodoList/TodoList'
import TodoSearch from '../TodoSearch/TodoSearch'
import { setData,setShowData } from "../../actions/todos";
import { connect } from "react-redux";
import { Card } from 'antd';

function TodoApp() {
  return (
    <Provider store={store}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
      }}
    >
      {/* #F8EFEA */}
      <Card 
      title="My TodoList" 
      bordered={false} 
      style={{ marginTop: '40px'}} 
      headStyle={{ textAlign: 'center', backgroundColor: '#FFFFFF' }}
      bodyStyle={{ backgroundColor: '#FFFFFF' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TodoSearch />
          <TodoFilters />
          <TodoList style={{ margin: '0px auto' }} />
        </div>
      </Card>
    </div>
  </Provider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: (date) => {
      dispatch(
        setData(date)
      );
    },
    sendActionShow:(date)=>{
        dispatch(
            setShowData(date)
        );
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

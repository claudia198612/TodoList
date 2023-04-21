import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from 'react-redux';
import store from '../../store';
import TodoFilters from '../TodoFilters/TodoFilters'
import TodoList from '../TodoList/TodoList'
import TodoSearch from '../TodoSearch/TodoSearch'
import { setData,setShowData } from "../../actions/todos";
import { connect } from "react-redux";
import { Card } from 'antd';
import {initializeStateFromDB} from '../../actions/todos'


function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeStateFromDB());
  }, [dispatch]);

  // 总结一下，useEffect 和 componentDidMount 的主要区别：

  // 1.componentDidMount 是类组件的生命周期方法，而 useEffect 是函数组件中的一个钩子。
  // 2.useEffect 更加灵活，因为它可以模拟多个生命周期方法（如 componentDidMount、componentDidUpdate 和 componentWillUnmount），并根据依赖数组的变化来决定何时执行副作用。
  // 3.useEffect 可以提供一个可选的清理函数，用于在组件卸载或重新执行副作用前执行清理操作。



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

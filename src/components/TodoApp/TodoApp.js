import React, { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "../../store";
import TodoFilters from "../TodoFilters/TodoFilters";
import TodoList from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import { setData, setShowData } from "../../actions/todos";
import { connect } from "react-redux";
import { Card } from "antd";
import { initializeStateFromDB } from "../../actions/todos";
import { FloatButton } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';


function TodoApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeStateFromDB());
  }, [dispatch]);

  // 总结一下，useEffect 和 componentDidMount 的主要区别：

  // 1.componentDidMount 是类组件的生命周期方法，而 useEffect 是函数组件中的一个钩子。
  // 2.useEffect 更加灵活，因为它可以模拟多个生命周期方法（如 componentDidMount、componentDidUpdate 和 componentWillUnmount），并根据依赖数组的变化来决定何时执行副作用。
  // 3.useEffect 可以提供一个可选的清理函数，用于在组件卸载或重新执行副作用前执行清理操作。

  // 这里是自动使用了开放的静态资源
  const [audio] = useState(new Audio("/audio/music.mp3"));
  audio.loop = true; // 设置循环播放
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

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
      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
        }}
      >
      {/* <Button type="primary" onClick={togglePlay} >{isPlaying ? "音乐停止" : "音乐播放"}</Button> */}
      <FloatButton
      shape="circle"
      onClick={togglePlay}
      type={isPlaying ? "primary" : "danger"}
      style={{ right: 94 }}
      icon={<CustomerServiceOutlined />}
    />
      </div>
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

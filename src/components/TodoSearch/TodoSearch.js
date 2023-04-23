import React from "react";
import { Space, Input } from 'antd';

import { handleChange, subscribeToStore } from './todoSearchHandlers';

const { Search } = Input;

export default class TodoSearch extends React.Component {

    // -----------------------------constructor-----------------------------------------
    // constructor是用于初始化组件的状态和方法
    // constructor有以下目的：

    // 1.调用super(props)：在派生类（继承自其他类的类）的构造函数中，
    // 必须在使用this之前调用super()，因为this在未调用super()之前无法使用。
    // super(props)调用了基类（React.Component）的构造函数，并将props传递给它。
    // 这对于组件在使用props时能正常工作是必要的。

    // 2.绑定this.handleChange方法：由于handleChange方法在todoSearchHandlers中定义，
    // 它并不自动绑定到组件实例的上下文。这意味着在handleChange方法内部，如果你尝试访问this，
    // 它将是undefined。为了解决这个问题，需要在组件的构造函数中使用bind(this)将方法绑定到组件实例。
    // 这样在handleChange方法中，this将引用组件实例，允许您访问和操作组件的状态和属性。
  constructor(props) {
    super(props);
    // 由于handleChange方法在todoSearchHandlers中定义
    // 它并不自动绑定到组件实例的上下文。这意味着在handleChange方法内部，如果你尝试访问this，
    // 它将是undefined。
    // 为了解决这个问题，需要在组件的构造函数中使用bind(this)将方法绑定到组件实例。
    this.handleChange = handleChange.bind(this);
  }
    // ---------------------------------------------------------------------------------------------------


    // -----------------------------componentDidMount生命周期方法-----------------------------------------

    // componentDidMount生命周期方法在这个组件中做了以下事情:

    // 1.调用了subscribeToStore函数，这个函数是从todoSearchHandlers.js文件中导入的。
    // 这个函数需要一个回调函数作为参数，这个回调函数会在store中的state发生变化时执行。
    // 在组件挂载之后，只要当state发生变化时，回调函数执行this.setState({})。
    // this.setState({})会触发组件重新渲染，从而使组件显示最新的数据。

    // 2.当store.subscribe()被调用时，它会返回一个取消订阅的函数。
    // 在这个例子中，我们将返回的取消订阅函数赋值给了this.unsubscribe。这允许我们在组件卸载时取消订阅，以防止内存泄漏。
  componentDidMount() {
    this.unsubscribe = subscribeToStore(() => {
      this.setState({});
    });
  }
    // -----------------------------------------------------------------------------------------------------



    // -----------------------------componentWillUnmount生命周期方法-----------------------------------------

    // componentWillUnmount() 是一个 React 组件的生命周期方法，当组件被卸载并从 DOM 中移除时，它会被调用。
    // 在这个方法中，我们通常执行一些清理工作，例如取消订阅、清除定时器等，以避免内存泄漏。

    // componentWillUnmount() 方法中的代码执行了以下操作：
    // 1.检查 this.unsubscribe 是否存在。
    // this.unsubscribe 是在 componentDidMount() 方法中赋值的，它是一个函数，用于取消订阅 store 中的状态变化。

    // 2.如果 this.unsubscribe 存在（即有一个有效的取消订阅函数），则调用 this.unsubscribe()。
    // 这会取消组件对 store 状态变化的订阅，从而在组件卸载后避免不必要的更新和潜在的内存泄漏。
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
    // -----------------------------------------------------------------------------------------------------


  render() {
    return (
      <>
        <Space direction="vertical">
          <Search
            style={{ width: '600px' }}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            // onSearch={store.getState().todos.setSearchText}
            onChange={this.handleChange}
          />
        </Space>
      </>
    );
  }
}

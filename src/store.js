import { createStore, applyMiddleware } from 'redux';
// Redux Thunk有什么作用？
// 简而言之，Redux Thunk 的作用是：

// 1.允许你在 action creators 中编写异步逻辑。
// 2.提供了一种简洁的方式来处理副作用和异步操作，同时仍然遵循 Redux 的原则。
// 3.能够根据应用程序状态分发多个 action，从而使你可以更好地组织和控制复杂的应用程序逻辑。
import thunk from 'redux-thunk';

// import { createStore, applyMiddleware, compose } from 'redux';

// import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

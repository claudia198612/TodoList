import store from '../../store';
import { setSearchText } from "../../actions/todos";

export function handleChange() {
  store.dispatch(setSearchText());
}

// subscribeToStore函数充当辅助函数
// 接收一个名为subscribeFunction的回调函数作为参数。这个函数的作用是在组件挂载后订阅 Redux store 的变化
// 当 Redux store 发生变化时，它会调用传入的subscribeFunction回调函数。
// 在这个例子中，subscribeFunction会更新组件的状态，从而触发组件重新渲染。
// 该函数返回一个取消订阅的函数，以便在组件卸载时取消订阅。
// 这是一个很好的做法，因为在组件卸载后，您不希望依然监听 store 的变化，这样可以避免潜在的内存泄漏。
export function subscribeToStore(subscribeFunction) {
  return store.subscribe(() => {
    subscribeFunction();
  });
}
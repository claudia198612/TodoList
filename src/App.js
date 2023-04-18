import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import store from './store';
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import axios from "axios";
import { setData } from "./actions/todos";

function TodoApp() {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      store.dispatch(setData(response.data));
      // setData(response.data);
      // setshowData(response.data)

    }
    fetchData();
  }, []);



  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TodoSearch/>
        <TodoFilters
        />
        
          <TodoList style={{ margin: '0px auto' }}/>
      </div>

  );
}





function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
import React, { useEffect } from 'react';
import { useAppDispatch } from './state/hooks';
import { fetchTodos } from './state/todoListSlice';
import { InputTodo, TodoList } from './components';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = new URL('http://localhost:5001/api/v1/todo/');
    dispatch(fetchTodos(url));
  }, [dispatch]);

  return (
    <div className="flex flex-col mt-40 ">
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default App;

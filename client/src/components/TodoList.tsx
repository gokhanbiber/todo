import React from 'react';
import { TodoComponent } from './TodoComponent';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { Todo } from '../modal';
import { setTodos } from '../state/todoListSlice';
import HttpClient from '../httpClient/HttpClient';

export const TodoList = () => {
  const dispatch = useAppDispatch();

  const { todos } = useAppSelector((state) => state.todoList);

  const changeComplete = async (item: Todo) => {
    item = { ...item, isCompleted: !item.isCompleted };

    const newTodo = await HttpClient.updateTodo(item);
    dispatch(setTodos(todos.map((todo) => (todo.id === item.id ? newTodo : todo))));
  };

  const onDelete = async (item: Todo) => {
    await HttpClient.deleteTodo(item);
    dispatch(setTodos(todos.filter((todo) => todo.id !== item.id)));
  };

  return (
    <ul className="flex flex-col gap-2 place-items-center mt-3">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoComponent todo={todo} changeComplete={changeComplete} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

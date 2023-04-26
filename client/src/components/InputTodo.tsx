import React from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setTask } from '../state/taskSlice';
import { setTodos } from '../state/todoListSlice';
import HttpClient from '../httpClient/HttpClient';

export const InputTodo = () => {
  const { task } = useAppSelector((state) => state.task);
  const { todos } = useAppSelector((state) => state.todoList);

  const dispatch = useAppDispatch();

  const sumbitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    //call add function
    e.preventDefault();

    if (task) {
      const newTodo = await HttpClient.saveTodo(task);
      dispatch(setTodos([...todos, newTodo]));
      dispatch(setTask(''));
    }
  };
  return (
    <form className="m-auto" onSubmit={sumbitTodo}>
      <input
        className="w-96 h-8 p-2 rounded-lg m-auto bg-slate-100 focus:ring-4 focus:ring-blue-300"
        type="text"
        placeholder="Enter a task here"
        value={task}
        onChange={(e) => dispatch(setTask(e.target.value))}
      />
    </form>
  );
};

import React from 'react';
import { Todo } from '../modal';
import { AiOutlineClose, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

interface TodoComponentProps {
  todo: Todo;
  changeComplete: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export const TodoComponent = ({ todo, changeComplete, onDelete }: TodoComponentProps) => {
  const bgColor = todo.isCompleted ? 'from-emerald-500 to-cyan-500' : 'from-rose-500 to-fuchsia-500';
  return (
    <div
      className={
        'bg-gradient-to-r border border-slate-800 shadow-md hover:shadow-lg flex flex-wrap place-items-center justify-between w-72 h-8 p-1 rounded-lg hover:ring-1 text-slate-100 font-bold ' +
        (todo.isCompleted ? 'from-emerald-500 to-cyan-500' : 'from-rose-500 to-fuchsia-500')
      }
    >
      <p>{todo.description}</p>
      <p className="flex gap-1 place-items-center">
        <span className="cursor-pointer" onClick={() => changeComplete(todo)}>
          {todo.isCompleted ? <AiOutlineCheck /> : <AiOutlineClose />}
        </span>
        <span className="cursor-pointer" onClick={() => onDelete(todo)}>
          <AiOutlineDelete />
        </span>
      </p>
    </div>
  );
};

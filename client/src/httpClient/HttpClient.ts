import { Todo } from '../modal';

const HttpClient = Object.freeze({
  saveTodo: async (description: string) => {
    const response = await fetch('http://localhost:5001/api/v1/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    return response.json();
  },
  updateTodo: async (todo: Todo) => {
    const response = await fetch(`http://localhost:5001/api/v1/todo/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ...todo,
      }),
    });

    return response.json();
  },
  deleteTodo: async (todo: Todo) => {
    await fetch(`http://localhost:5001/api/v1/todo/${todo.id}`, { method: 'DELETE' });
  },
});

export default HttpClient;

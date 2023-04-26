export interface TodoList {
  todos: Todo[];
  status: string;
}

export interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

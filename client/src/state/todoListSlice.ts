import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoList } from '../modal';

export const fetchTodos = createAsyncThunk('fetch-todos', async (url: URL) => {
  const response = await fetch(url);
  return response.json();
});

const initial: TodoList = {
  todos: [],
  status: '',
};

const todoListSlice = createSlice({
  name: 'TodoList',
  initialState: initial,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'success';
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export const { setTodos } = todoListSlice.actions;
export default todoListSlice.reducer;

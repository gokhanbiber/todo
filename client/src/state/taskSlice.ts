import { createSlice } from '@reduxjs/toolkit';

interface Task {
  task: string;
}

const initialState: Task = {
  task: '',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo } = slice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default slice.reducer;

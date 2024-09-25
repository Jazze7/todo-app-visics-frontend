import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.unshift({ id: Date.now(), text: action.payload, completed: false }); // Add new todo at the beginning
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    clearTodo: (state) => {
      return state.filter((todo) => !todo.completed);
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;

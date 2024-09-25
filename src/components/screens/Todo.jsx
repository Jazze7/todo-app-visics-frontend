import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  clearTodo,
  setTodos,
} from "../store/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // Api call
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=7"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setTodos(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTodos();
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  // Filtering tasks
  const pendingTasks = todos.filter((item) => item.completed === false);
  const completedTasks = todos.filter((item) => item.completed === true);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Add
        </button>
      </div>
      {pendingTasks.length > 0 && (
        <h3 className="font-bold mb-3">Pending Tasks</h3>
      )}
      <ul>
        {pendingTasks.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title || todo.text} 
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {completedTasks.length > 0 && (
        <h3 className="font-bold mb-3">Completed Tasks</h3>
      )}
      <ul>
        {completedTasks.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <span>{todo.title || todo.text}</span> {/* Display title or text */}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {completedTasks.length > 0 && (
        <button
          onClick={() => dispatch(clearTodo())}
          className="bg-red-500 text-white p-1 mt-4 w-full"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Todo;

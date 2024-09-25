import React, { useState } from "react";

// store
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, clearTodo } from "../store/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  //   filtering tasks
  const pendingTasks = todos.filter((item) => item.completed === false);
  const completedTasks = todos.filter((item) => item.completed === true);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Add
        </button>
      </div>
      {pendingTasks[0] && <h3 className="text-bold mb-3">Pending Tasks</h3>}
      <ul>
        {pendingTasks?.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
              />

              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="ml-auto bg-red-500 text-white p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {completedTasks[0] && <h3 className="font-bold mb-3">Completed Tasks</h3>}
      <ul>
        {completedTasks?.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="ml-auto bg-red-500 text-white p-1"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {completedTasks[0] && (
        <button
          onClick={() => dispatch(clearTodo())}
          className="ml-auto bg-red-500 text-white p-1"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Todo;

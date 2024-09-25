# Simple Todo Application

A feature-rich Todo application built with React, Redux Toolkit, and styled with Tailwind CSS. This app is created using Vite, fetches initial todos from an API, and allows users to manage their tasks efficiently.

## Features

- Fetch initial todos from an API
- Add new tasks
- Mark tasks as completed or active
- Delete individual tasks
- Clear all completed tasks
- Display separate lists for pending and completed tasks
- Responsive design for both mobile and desktop

## Tech Stack

- React
- Redux Toolkit for state management
- Tailwind CSS for styling
- Vite for build tooling and development server
- Fetch API for data retrieval

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or Yarn package manager

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/simple-todo-app.git
   cd simple-todo-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open the local server address shown in your terminal (usually http://localhost:5173) to view the app in your browser.

## Usage

1. When the app loads, it fetches 7 initial todos from JSONPlaceholder API.
2. Add a task: Type your task in the input field and click the "Add" button.
3. Complete a task: Click the checkbox next to a task to mark it as completed.
4. Delete a task: Click the "Remove" button next to a task to delete it.
5. Clear completed tasks: Click the "Clear All" button at the bottom to remove all completed tasks.

## Project Structure

```
src/
├── components/
│   └── Todo.js
├── store/
│   └── todoSlice.js
├── App.jsx
└── main.jsx
```

## Key Components

### Todo.js

This is the main component that handles the UI and user interactions. It uses Redux hooks (`useSelector` and `useDispatch`) to interact with the store.

### todoSlice.js

This file contains the Redux slice for managing the todo state. It defines the following actions:

- `addTodo`: Adds a new todo to the beginning of the list
- `toggleTodo`: Toggles the completed status of a todo
- `deleteTodo`: Removes a specific todo
- `clearTodo`: Removes all completed todos
- `setTodos`: Sets the initial todos fetched from the API

## API Integration

The app fetches initial todos from the JSONPlaceholder API:

```javascript
https://jsonplaceholder.typicode.com/todos?_limit=7
```

This is done in the `useEffect` hook in the `Todo` component.

## Build for Production

To build the app for production, run:

```
npm run build
# or
yarn build
```

This will generate a `dist` folder with your production-ready assets.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

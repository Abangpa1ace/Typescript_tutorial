import TodoList from "components/TodoList";
import React, { useState, useEffect } from "react";
import { TODOS } from "./data";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  const toggleTodo: ToggleTodo = (id) => {
    const newTodos = todos.map((todo: TodoItemType) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;

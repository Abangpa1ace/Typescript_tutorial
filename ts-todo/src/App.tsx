import React, { useState, useEffect } from "react";
import TodoList from "components/TodoList";
import AddTodoForm from 'components/AddTodoForm';
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

  const addTodo: 

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm />
    </div>
  );
};

export default App;

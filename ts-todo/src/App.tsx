import React, { useEffect } from "react";
import TodoItem from "./components/TodoItem";
import { TODOS } from "./data";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  return (
    <div className="App">
      <TodoItem todo={TODOS[0]} />
      <TodoItem todo={TODOS[1]} />
    </div>
  );
};

export default App;

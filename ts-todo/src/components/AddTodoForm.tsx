import React, { useState, ChangeEvent, FormEvent } from "react";

const AddTodoForm: React.FC = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
  }
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;

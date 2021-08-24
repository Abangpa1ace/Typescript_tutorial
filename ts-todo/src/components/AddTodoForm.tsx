import React, { useState, ChangeEvent, FormEvent } from "react";

type Props = {
  addTodo: AddTodo;
};

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleInput} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;

import React from "react";
import styled from "styled-components";

type Props = {
  todo: TodoItemType;
  toggleTodo: ToggleTodo;
};

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Todoitem>
      <label className={todo.done ? "done" : ""}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </Todoitem>
  );
};

const Todoitem = styled.li`
  .done {
    text-decoration: line-through;
  }
`;

export default TodoItem;

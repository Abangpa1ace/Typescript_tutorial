import React from "react";
import styled from "styled-components";
interface Props {
  todo: TodoItemType;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <Todoitem>
      <label className={todo.done ? "done" : ""}>
        <input type="checkbox" checked={todo.done} />
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

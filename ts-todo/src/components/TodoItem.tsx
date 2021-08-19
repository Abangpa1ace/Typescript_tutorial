import React from "react";

interface Props {
  todo: {
    text: string;
    complete: boolean;
  };
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;

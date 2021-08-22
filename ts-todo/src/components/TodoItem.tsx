import React from "react";
import { TodoItemType } from '../types';

interface Props {
  todo: TodoItemType;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.done} />
          {todo.text}
        </label>
    </li>
  );
};

export default TodoItem;

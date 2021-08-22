declare global {
  interface TodoItemType {
    text: string;
    done: boolean;
  }

  type ToggleTodo = (id: number) => void;
}
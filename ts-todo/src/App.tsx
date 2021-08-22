import React from 'react';
import TodoItem from './components/TodoItem';
import { TodoItemType } from './types';
import { TODOS } from './data';

function App() {
  
  return (
    <div className="App">
      <TodoItem todo={{text: 'hi', done: false}} />
    </div>

  );
}

export default App;

import React from 'react';
import TodoList from './components/Todo/Todolist';

function App() {
  const todos = [
    { title: 'buy meal', completed: false, id: 1 },
    { title: 'clean the room', completed: false, id: 2 },
    { title: 'wash the dishes', completed: false, id: 3 },
  ];
  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;

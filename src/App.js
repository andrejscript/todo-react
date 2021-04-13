import React from 'react';
import TodoList from './components/Todo/Todolist';

function App() {
  const [todos, setTodos] = React.useState([
    { title: 'buy meal', completed: false, id: 1 },
    { title: 'clean the room', completed: false, id: 2 },
    { title: 'wash the dishes', completed: false, id: 3 },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;

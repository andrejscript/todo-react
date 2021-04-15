import React from 'react';
import TodoList from './components/Todo/Todolist';
import AddTodo from './components/Todo/AddTodo';
import Context from './Context';

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

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <AddTodo />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>no todos</p>}

      </div>
    </Context.Provider>
  );
}

export default App;

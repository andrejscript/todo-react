import React, { useEffect } from 'react';
import TodoList from './components/Todo/Todolist';
// import AddTodo from './components/Todo/AddTodo';
import SearchPlugin from './components/Search/SearchPlugin';
import Context from './components/Context/Context';
import Loader from './components/Loader/Loader';

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/Todo/AddTodo'));
      }, 3000);
    })
);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 1500);
      });
  }, []);

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
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          completed: false,
          id: Date.now(),
        },
      ])
    );
  }

  const filterItems = (value) => {
    console.log(value);
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos</p>
        )}

        <SearchPlugin onFilter={filterItems} />
      </div>
    </Context.Provider>
  );
}

export default App;

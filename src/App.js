import React, { useEffect } from 'react';
import TodoList from './components/Todo/Todolist';
// import AddTodo from './components/Todo/AddTodo';
import SearchPlugin from './components/Search/SearchPlugin';
import Context from './Context';
import Loader from './Loader';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          console.log(todos);

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
    console.log(todos);
  }

  const filterItems = (value) => {
    console.log(value);
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <React.Suspense>
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

import React from 'react';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

const TodoList = ({ todos }) => {
  return (
    <ul style={styles.ul}>
      {todos.map((item, index) => {
        return <TodoItem key={item.id} title={item.title} index={index} />;
      })}
    </ul>
  );
};

export default TodoList;

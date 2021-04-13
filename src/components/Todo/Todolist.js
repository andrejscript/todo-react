import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};


const TodoList = ({ todos }) => {

  const inputHandler = () => {
    console.log(123);
    
  }
  

  return (
    <ul style={styles.ul}>
      {todos.map((item, index) => {
        return (
          <TodoItem 
            key={item.id} 
            todo={item} 
            index={index} 
            onChange={inputHandler}  
            />
        )
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

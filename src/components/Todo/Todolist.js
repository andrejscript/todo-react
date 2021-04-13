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


const TodoList = (props) => {

  const {todos, onToggle} = props;

  return (
    <ul style={styles.ul}>
      {todos.map((item, index) => {
        return (
          <TodoItem 
            key={item.id} 
            todo={item} 
            index={index} 
            onChange={onToggle}  
            />
        )
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

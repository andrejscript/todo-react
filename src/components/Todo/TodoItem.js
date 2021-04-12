import React from 'react';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

const TodoItem = ({title, index}) => {
  return (
    <li><strong>{index + 1}</strong>. {title}</li>
  )
}

export default TodoItem;
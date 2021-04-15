import React, {useState} from 'react';

const AddTodo = () => {
  const [value, setValue] = useState(''); 

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
   <form className="add-form" onSubmit={submitHandler}>
     <input value={value} onChange={event => setValue(event.target.value)} />
     <button type='submit'>Add todo</button>
   </form> 
  )
}

export default AddTodo;

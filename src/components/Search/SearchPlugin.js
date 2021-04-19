import React from 'react';

 const SearchPlugin = ({onFilter}) => {

  const onTextChanged = (e) => {
      let value = e.target.value.trim();      
      onFilter(value);
  }
           
      return <input placeholder="Search" onChange={onTextChanged} />;
  }

export default SearchPlugin;
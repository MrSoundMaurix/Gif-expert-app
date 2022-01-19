import React, {useState} from 'react';
import  PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState(' ');
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit hecho');
    if(inputValue.trim().length > 2 ){
      setCategories( cats => [ inputValue,...cats ]);
      setinputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>

      <input type='text'
       value={ inputValue }
       onChange={ handleInputChange }
       />
      <h2> Add category </h2>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

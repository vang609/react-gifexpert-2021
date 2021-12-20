import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    // Manejo de enter
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 1){
            setCategories( catgegory => [ inputValue, ...catgegory ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

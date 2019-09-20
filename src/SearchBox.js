import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <input
            type='search'
            placeholder='search robots'
            // when something changes, execute function that the parent gave 
            onChange={ searchChange }    
        />

    )
}

export default SearchBox
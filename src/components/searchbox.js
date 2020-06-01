import React from 'react';

const SearchBox = ({searchfield}) =>{
    return(
        <div className='search-box'>
              <input 
                type="text"
                className="search-bar"
                placeholder="Search.."
            />
        </div>
     );
}
export  default SearchBox;
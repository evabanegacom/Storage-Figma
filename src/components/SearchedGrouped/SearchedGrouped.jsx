import React from 'react';
import './searchedGrouped.css';
import Search from '../Search/Search';
import Grouped from '../Grouped/Grouped';

const SearchedGrouped = () => {
  return (
    <div className='searchedGroup-div'>
     <Search />
     <Grouped />
     <div className='searchedGroup__button-container'>
       <button>View More Listings</button>
     </div>
    </div>
  )
}

export default SearchedGrouped
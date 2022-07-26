import React from 'react';
import './search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='search__parameters-div'>
      <div className='search__location'>
        <div className='search__location-text'>Location</div>
        <div className='search__location-input'><input placeholder='Search Location'/></div>
      </div>
      <div className='search__property'>
        <div className='search__property-text'>Properties</div>
        <div className='search__property-input'><input placeholder='Unit Count'/></div>
      </div>
      <div className='search__occupancy'>
        <input placeholder='occupation'/></div>
      <div className='search__button'>
        <button>&#x1F50E;&#xFE0E; &nbsp;Search</button>
      </div>
      </div>
    </div>
  )
}

export default Search
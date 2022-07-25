import React from 'react';
import './grouped.css';
import pics from '../../assets/pics.svg';
import vector from '../../assets/Vector.svg';
import vectorOne from '../../assets/Vector (1).svg';
import vectorTwo from '../../assets/Vector (2).svg';
import vectorThree from '../../assets/Vector (3).svg';
import image from '../../assets/image 8.svg';

const Elements = () => (
  <div className='grouped__images'>
    <div className='grouped__images-one'><img src={image} alt='location' /></div>
    <div className='grouped__location-div'>
      <div className='grouped__location-icon'><img src={vector} alt='location' /></div>
      <div className='grouped__location-header'>Jersy City, NJ</div>
    </div>
    <div className='grouped__location-div'>
      <div className='grouped__location-icon'><img src={vectorOne} alt='location' /></div>
      <div className='grouped__location-text'>Total Units: 89</div>
    </div>
    <div className='grouped__location-div'>
      <div className='grouped__location-icon'><img src={vectorTwo} alt='location' /></div>
      <div className='grouped__location-text'>Occupancy: 50%</div>
    </div>
    <div className='grouped__location-div'>
      <div className='grouped__location-icon'><img src={vectorThree} alt='location' /></div>
      <div className='grouped__location-text'>Size: 40,233 Sq Ft</div>
    </div>
    <div className='grouped__location-button'>
      <button>View More Detail</button>
    </div>
  </div>
)

const Grouped = () => {
  return (
    <div className='grouped'>
      <div className='first__elements'><Elements /></div>
      <div className='grouped__elements'><Elements /></div>
      <div className='grouped__elements'><Elements /></div>
      <div className='first__elements'><Elements image={image}/></div>
      <div className='grouped__elements'><Elements /></div>
      <div className='grouped__elements'><Elements /></div>
    </div>
  )
}

export default Grouped
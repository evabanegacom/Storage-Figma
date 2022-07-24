import React from 'react';
import './houses.css';
import pics from '../../assets/pics.svg';
import vector from '../../assets/Vector.svg';
import vectorOne from '../../assets/Vector (1).svg';
import vectorTwo from '../../assets/Vector (2).svg';
import vectorThree from '../../assets/Vector (3).svg';

const Houses = () => {
  const Elements = () => (
    <div className='houses__images'>
      <div className='houses__images-one'><img src={pics} alt='location' /></div>
      <div className='houses__location-div'>
        <div className='houses__location-icon'><img src={vector} alt='location' /></div>
        <div className='houses__location-header'>Jersy City, NJ</div>
      </div>
      <div className='houses__location-div'>
        <div className='houses__location-icon'><img src={vectorOne} alt='location' /></div>
        <div className='houses__location-text'>Total Units: 89</div>
      </div>
      <div className='houses__location-div'>
        <div className='houses__location-icon'><img src={vectorTwo} alt='location' /></div>
        <div className='houses__location-text'>Occupancy: 50%</div>
      </div>
      <div className='houses__location-div'>
        <div className='houses__location-icon'><img src={vectorThree} alt='location' /></div>
        <div className='houses__location-text'>Size: 40,233 Sq Ft</div>
      </div>
      <div className='houses__location-button'>
        <button>View More Detail</button>
      </div>
    </div>
  )
  return (
    <div className='houses'>
        <Elements />
        <div className='houses__elements'><Elements /></div>
        <div className='houses__elements'><Elements /></div>
    </div>
  )
}

export default Houses
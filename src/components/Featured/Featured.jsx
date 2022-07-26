import React from 'react';
import './featured.css';

const Featured = ({header}) => {
  return (
    <div className='featured'>
        <div className='featured__heading'>{header}</div>
        <div className='featured__text'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nunc tortor sapien sagittis 
        maecenas tincidunt. Quis pretium ornare
        </div>
    </div>
  )
}

export default Featured
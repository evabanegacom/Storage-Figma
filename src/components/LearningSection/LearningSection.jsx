import React from 'react';
import './learningSection.css';
import { Box, Grid } from '@mui/material';
import pics from '../../assets/smallHouse.svg';
import vector from '../../assets/loc.svg';
import vectorOne from '../../assets/Vector (1).svg';
import vectorTwo from '../../assets/Vector (2).svg';
import vectorThree from '../../assets/Vector (3).svg';

const Elements = () => (
    <div className='learningSection__images'>
      <div className='learningSection__images-one'><img src={pics} alt='location' /></div>
        <div className='learningSection__location-header'>
        Everything you need to know about how to buy a Self Storage
        </div>
        <div className='learningSection__icon'>
      <div className='learningSection__location-div'>
        <div className='learningSection__location-icon'><img src={vectorOne} alt='location' /></div>
        <div className='learningSection__location-text'>5hours Ago</div>
      </div>
      <div className='learningSection__location-div'>
        <div className='learningSection__location-icon'><img src={vectorTwo} alt='location' /></div>
        <div className='learningSection__location-text'>Buy</div>
      </div>
      <div className='learningSection__location-div'>
        <div className='learningSection__location-icon'><img src={vectorThree} alt='location' /></div>
        <div className='learningSection__location-text'>Raza</div>
      </div>
      </div>
      <div className='learningSection__location-button'>
        <button>View More Detail</button>
      </div>
    </div>
  )
  
const LearningSection = () => {
  return (
    <div className='learningSection__container'>
    <div className='learningSection__div'>
        <div className='learningSection__div-header'>
            Learn Everything About Buying, Selling, and Operating a Self Storage
        </div>
        <div className='learningSection__div-text'>
        Learn about literally anything to know about Selling or Buying a Self Storage
        </div>
        <div className='learningSection__grid'>
            <Grid container justifyContent='center' spacing={2}>
                <Grid className='learningsSection__grid-item' item><Elements item xs={12} sm={6} md={4} lg={4}/></Grid>
                <Grid className='learningsSection__grid-item' item><Elements item xs={12} sm={6} md={4} lg={4}/></Grid>
                <Grid className='learningsSection__grid-item' item><Elements item xs={12} sm={6} md={4} lg={4}/></Grid>
                <Grid className='learningsSection__grid-item' item><Elements item xs={12} sm={6} md={4} lg={4}/></Grid>
            </Grid>
        </div>
        <div className='learningSection__button-container'>
       <button>Read More</button>
        </div>
    </div>
    </div>
  )
}

export default LearningSection
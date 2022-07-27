import React from 'react';
import { Box, Grid } from '@mui/material';
import './footer.css';
import blueStorage from '../../assets/blueStorage.svg';

const Footer = () => {
  return (
    <div className='footer__container'>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div className='footer__storageConnect-one'>
                <img src={blueStorage} alt='blueStorage' /> &nbsp;
                Storage Connect
             </div>
             <div className='footer__storageConnect-one-text'>
             Nam posuere accumsan porta. Integer id orci sed ante 
             tincidunt tincidunt sit amet sed libero.
             </div>
             <div>
             © StorageConnect 2022, All Rights Reserved
             </div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div>Quick Links</div>
             <div>Active Listings</div>
             <div>Self your Self Storage</div>
             <div>Free Evaluation</div>
             <div>Learn</div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div>News Letter</div>
             <div>Get latest updates right in your inbox</div>
             <div><input placeholder='Enter your Email'/></div>
             <div><button>Subscribe Now</button></div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div>1</div>
             <div>2</div>
             <div>3</div>
           </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
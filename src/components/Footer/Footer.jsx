import React from 'react';
import { Box, Grid } from '@mui/material';
import './footer.css';
import blueStorage from '../../assets/blueStorage.svg';
import socialOne from '../../assets/Group 9.svg';
import shape from '../../assets/Shape.svg';
import { css } from '@emotion/css';

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
             <div className='footer__storageConnect-one-copy-right'>
             © StorageConnect 2022, All Rights Reserved
             </div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div className='footer__storageConnect-header'>Quick Links</div>
             <div className='footer__storageConnect-active'>Active Listings</div>
             <div className='footer__storageConnect-active'>Self your Self Storage</div>
             <div className='footer__storageConnect-active'>Free Evaluation</div>
             <div className='footer__storageConnect-active'>Learn</div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div className='footer__storageConnect-header'>News Letter</div>
             <div className='footer__storageConnect-active'>Get latest updates right in your inbox</div>
             <div className='footer__storageConnect-input'><input placeholder='Enter your Email'/></div>
             <div className='footer__storageConnect-button'><button>Subscribe Now</button></div>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
           <div className='footer__storageConnect'>
             <div className='footer__storageConnect-header'>Let's Get Social</div>
             <div className='footer__storageConnect-socials'>
                <img src={socialOne} alt='facebook' />
                <img className={footerStorageImg } src={socialOne} alt='facebook' />
                <img className={footerStorageImg } src={socialOne} alt='facebook' />
                <img  className={footerStorageImg } src={socialOne} alt='facebook' />
             </div>
             <div className='footer__storageConnect-drop-down'>
                <select>
                    <option value=''>&#127760;
                        English-En</option>
                </select>
             </div>
           </div>
        </Grid>
      </Grid>
    </div>
  )
}

const footerStorageImg = css`
  margin-left: 10px;
  `;
export default Footer
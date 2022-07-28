import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { css } from '@emotion/css';
import './navbar.css';
import building from '../assets/building.png';
const Menu = () => (
    <>
        <div>
        Active Listings
        </div>
        <div>
        Sell Your Self Storage
        </div>
        <div>
        Free Evaluation
        </div>
        <div>
        Learn
        </div>
        <button>
            contact
        </button>
    </>
);


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className={storageNavbar}>
            <div className='navlinks__container'>
            <div className={storageNavbarContainer}>
                <div className={storageNavbarLinks}>

                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875C30 2.66799 29.2305 3.4375 28.2812 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875Z" fill="#FFCE31" />
                    </svg>
                    <p>Storage Connect</p>
                </div>

                <div className={storageNavbarLinksContainer}>
                    <Menu />
                </div>
            </div>
            <div className={storageNavBarMenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        <div className={storageNavbarMenuContainerLinksSign}>
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.71875C0 0.769511 0.769511 0 1.71875 0H28.2812C29.2305 0 30 0.769511 30 1.71875C30 2.66799 29.2305 3.4375 28.2812 3.4375H1.71875C0.769511 3.4375 0 2.66799 0 1.71875ZM5.04545 4.8125C3.3886 4.8125 2.04545 6.15565 2.04545 7.8125V24.5C2.04545 26.1569 3.3886 27.5 5.04545 27.5H24.9545C26.6114 27.5 27.9545 26.1569 27.9545 24.5V7.8125C27.9545 6.15565 26.6114 4.8125 24.9545 4.8125H5.04545ZM19.7727 9.96875C19.7727 10.5383 19.311 11 18.7415 11H10.5767C10.0072 11 9.54545 10.5383 9.54545 9.96875C9.54545 9.39921 10.0072 8.9375 10.5767 8.9375H18.7415C19.311 8.9375 19.7727 9.39921 19.7727 9.96875Z" fill="#FFCE31" />
                    </svg>&nbsp;&nbsp;
                    <p>Storage Connect</p>
              </div>
        {toggleMenu && (
          <div className='storage__navbar-menu_container scale-up-center'>
            <div className="storage__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
      </div>
      <div className='storage__text-container'>
        <div className='storage__text'>
            <p>Self Storage Business Buy. Sell. Learn.</p>
        </div>
        <div className='storage__text-lorem'>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sit sagittis,
                 aliquam non tortor blandit lobortis. blandit
            </p>
        </div>
        <div className='storage__text-buttons'>
            <button className='storage__text-button-one'>sell your self storage</button>
            <button className='storage__text-button-two'>activate your self storage</button>
        </div>
      </div>
        </div>
    )
}

const storageNavbar = css`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 20px 0 100px 0;
  background: linear-gradient(-240.67deg, rgba(24, 73, 198, 0.9) 50.54%, rgba(24, 73, 198, 0) 85.02%), url(${building});
`
const storageNavbarContainer = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    background: #FFCE31;
border-radius: 10px;
padding: 8px 18px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
  }
@media only screen and (max-width: 1050px){
    display: none;
  }
`;
const storageNavbarLinks = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    color: #fff;
`
const storageNavbarLinksContainer = css`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }
`;

const storageNavBarMenu = css `
    display: none;
    position: relative;
    color: #fff;
    svg {
        cursor: pointer;
    }
    @media only screen and (max-width: 1050px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        width: 100%;
    }

    @media only screen and (max-width: 700px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        width: 100%;
    }
`;

const storageNavbarMenuContainerLinksSign = css`
  display: none;
  @media only screen and (max-width: 1050px){
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 320px){
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 300px;
}
`;



export default Navbar;
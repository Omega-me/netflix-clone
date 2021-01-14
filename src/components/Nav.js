import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    //changing the show state after we scroll more than 100px on y axis
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__show'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='logo'
      />
      <img
        className='nav__user'
        src='https://occ-0-3490-778.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABUg5S70i_ilsOnONSRXCajuV1pfCTaadBNjgQQZ-aFNwYI5exso7PYVvRqITXfiS_Oaw_OusHWowYcMR3sC2T7z2PWsg.png?r=f2f'
        alt='user'
      />
    </div>
  );
};

export default Nav;

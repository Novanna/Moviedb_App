import React from 'react';
import { NavLink } from 'react-router-dom';
import movielogo from './../../assets/images/mstile-150x150.png'

import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      {/* <img src={movielogo} alt="Movie Logo" className={classes.MovieLogo} /> */}
      <NavLink to="/">
        MovieDB
      </NavLink>
    </div>
  );
};

export default Logo;

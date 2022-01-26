import React from 'react';

import classes from './Footer.module.css';
import TMDBLogo from '../../assets/images/tmdb-logo.svg'

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>    
      <p className={classes.CopyRight}>Prodemy 7 | Developed By Novanna Rahma Zani</p> 
      <img src={TMDBLogo} alt="TMDB Logo" className={classes.TMDBLogo}/>
    </footer>
  );
};

export default Footer;
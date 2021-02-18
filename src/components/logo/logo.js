import React from 'react';
import logo from '../../img/Logo.png';
import style from './logo.module.scss';

const Logo = () => (
        <img src={logo} alt='logo'  className={style.logo}/>
    )

export default Logo
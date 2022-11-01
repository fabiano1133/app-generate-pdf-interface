import React from 'react';
import  Logo  from '../LogoHeader/Logo';
import logo from '../../assets/images/header-logo.svg';
import './header.css';

export default function Header() {
    return (
        
        <header className="header">
            <Logo />
              <img className="header-logo" src={logo} alt="header-logo"></img>   
        </header>
    )
}
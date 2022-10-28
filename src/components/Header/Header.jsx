import React from 'react';
import  Logo  from '../LogoHeader/Logo';
import LogoWhatsapp from '../LogoWhatsapp/LogoWhatsapp';
import './header.css';

export default function Header() {
    return (
        
        <header className="header">
            <Logo />
            <h1>Gerador de Contratos</h1>
            <span className='contato'><LogoWhatsapp/>(92) 98460-0010</span>
        </header>
    )
}
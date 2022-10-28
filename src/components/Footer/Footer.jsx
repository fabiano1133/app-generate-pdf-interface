import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import './footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-social'>
                <a href="https://localhost:3000"><FaLinkedin size="40" color='#fff'/></a>
                
                <a href="https://localhost:3000"><FaInstagram size="40" color='#fff'/></a>
                
                <a href="https://localhost:3000"><FaGithub size="40" color='#fff'/></a>
                
            </div>
            <p className='copyright'>Desenvolvido por<a href="https://www.linkedin.com/in/fabiano-albuquerque-b978a715a/" target="_blank" rel="noreferrer">Fabiano Albuquerque</a></p>
        </footer>
    )
}  // End of Footer component
import React from 'react'
import './home.css'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'

export function Home() {
    return (
        
        <div className='container'>
            <Header/>
            <div className='container'>
                <h1 className='title'>Seja bem vindo!</h1>
                <h2 className='subTitle'>Gere contratos de forma simples</h2>
            </div>

            <div className='card-options'>
                <h2>Qual o tipo de contrato que você precisa?</h2>
                <div className='options'>
                    <NavLink to='' className='btn-option'>ALUGUEL COM FIADOR</NavLink> 
                    <NavLink to='/form' className='btn-option'>ALUGUEL COM CAUÇÃO</NavLink>
                    <button className='btn-option'>COMPRA E VENDA</button>
                </div>
            </div>              
        </div>
    )
}
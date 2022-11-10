import React from 'react'
import './home.css'

export function Home() {
    return (
        <div className='container'>
            <div className='container'>
                <h1 className='title'>Seja bem vindo!</h1>
                <h2 className='subTitle'>Gere contratos de forma simples</h2>
            </div>

            <div className='card-options'>
                <h2>Qual o tipo de contrato que você precisa?</h2>
                <div className='options'>
                    <button className='btn-option'>Opção 1</button>
                    <button className='btn-option'>Opção 2</button>
                    <button className='btn-option'>Opção 3</button>
                    <button className='btn-option'>Opção 4</button>
                </div>
            </div>    
        </div>
    )
}
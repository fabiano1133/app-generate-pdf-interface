import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="title">Seja bem vindo!</h1>
          <h2 className="subTitle">Gere contratos de forma simples</h2>
        </div>

        <div className="card-container">
          <div className="card-options">
            <h2>Qual o tipo de contrato que você precisa?</h2>
            <div className="options">
              <NavLink to="/form-fiador" className="btn-option">
                ALUGUEL COM FIADOR
              </NavLink>
              <NavLink to="/form-caucao" className="btn-option">
                ALUGUEL COM CAUÇÃO
              </NavLink>
              <NavLink to="/404" className="btn-option">
                COMPRA E VENDA
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

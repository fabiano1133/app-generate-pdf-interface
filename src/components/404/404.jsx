import React from "react";
import "./style.css";
import image from "../../../src/assets/images/construction-svgrepo-com.svg";

export function NotFound() {
  return (
    <div className="container-notfound">
      <img className="image-error" src={image} alt="logo whatsapp" />
      <h1>Ops...</h1>
      <h2>Essa página está em desenvolvimento</h2>
    </div>
  );
}

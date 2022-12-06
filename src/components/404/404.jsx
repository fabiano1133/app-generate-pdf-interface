import React from "react";
import image from "../../../src/assets/images/construction-svgrepo-com.svg";
import "./style.css";

export function NotFound() {
  return (
    <div className="container-notfound">
      <img className="image-error" src={image} alt="logo whatsapp" />
      <h1>Ops...</h1>
      <h2>Essa página está em desenvolvimento</h2>
    </div>
  );
}

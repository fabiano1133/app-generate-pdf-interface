import React from "react";
import image from "../../../src/assets/images/logo.png";

export default function Logo() {
  return (
    <a href="/">
      <img className="logo" src={image} alt="logo"></img>
    </a>
  );
}

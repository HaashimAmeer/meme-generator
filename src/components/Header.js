import React from "react";
import ReactDOM from "react-dom";
import img from "../images/troll.png";

function Header() {
  return (
    <header className="header">
      <img className="header-image" src={img} alt="" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course - Project 4</h4>
    </header>
  );
}

export default Header;

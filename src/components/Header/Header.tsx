import React from "react";
import "./styles.scss";
import logo from "../../assets/icons/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="header__content container">
        <img src={logo} alt="logo" className="header__logo"></img>
        <nav className="header__nav">
          <a href="" className="header__nav-link">
            Features
          </a>
          <a href="" className="header__nav-link">
            Partners
          </a>
          <a href="" className="header__nav-link">
            Stories
          </a>
        </nav>
        <button className="header__button">Download for free</button>
      </div>
    </header>
  );
};

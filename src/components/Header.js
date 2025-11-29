import React from "react";
import "../styles/Header.css";

const headerImg = require("../assets/logo.png");

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">
        <img src={headerImg} alt="Header Image" className="headerImage" />
        Expense Tracker
      </div>
    </div>
  );
};

export default Header;

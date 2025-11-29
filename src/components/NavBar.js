import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer"> 
        <a href="#stats" className="navButton">Home</a>
        <a href="#addTransaction" className="navButton">Add Transaction</a>
        <a href="#expenses" className="navButton">Expenses</a>
        <a href="#reports" className="navButton">Reports</a>
    </nav>
    );
};
export default NavBar;
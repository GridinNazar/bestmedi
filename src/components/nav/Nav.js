import React from "react"
import "./Nav.scss"
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
    <nav className="nav">
      <Link to="/">
        <span className="material-symbols-outlined">search</span>
      </Link>
      <Link to="/map">
        <span className="material-symbols-outlined">map</span>
      </Link>
      <Link to="/cart">
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
    </nav>
  );
};

export default Nav;

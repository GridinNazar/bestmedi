import React, { useState } from "react"
import logo from "./../../assets/logo.svg"
import avatar from "./../../assets/avatar.png"
import "./Header.scss"
import { Link } from 'react-router-dom';

const Header = () => {
	// const [isBurgerActive, setIsBurgerActive] = useState(false);
	// const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);

	return (
    <header>
      <div className="logo">
        <img src={logo} height="40" width="40" className="logo-img" />
        <span className="logo-name">BestMedi</span>
      </div>
      <Link to="/bestmedi/profile">
        <div className="avatar">
          <img src={avatar} height="55px" width="55px" />
        </div>
      </Link>

      {/* <nav className={isBurgerActive ? "nav open" : "nav"}>
        <ul>
          <li>
            <a href="#">Поиск</a>
          </li>
          <li>
            <a href="#">Карта</a>
          </li>
          <li>
            <a href="#">Корзина</a>
          </li>
          <li>
            <a href="#">Прочее</a>
          </li>
        </ul>
      </nav>

      <div
        className={isBurgerActive ? "menu-button active" : "menu-button"}
        onClick={() => {
          setIsBurgerActive((state) => !state);
        }}
      >
        <span></span>
      </div> */}
    </header>
  );
};

export default Header;

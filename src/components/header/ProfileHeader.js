import React, { useState } from "react";
import logo from "./../../assets/logo.svg";
import avatar from "./../../assets/avatar.png";
import "./Header.scss";
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  return (
    <header className="profile">
      <Link to="/" style={{ all: "unset", margin: '0 auto'}}>
        <div className="logo profile">
          <img src={logo} height="40" width="40" className="logo-img" />
          <span className="logo-name">BestMedi</span>
        </div>
      </Link>
    </header>
  );
};

export default ProfileHeader;

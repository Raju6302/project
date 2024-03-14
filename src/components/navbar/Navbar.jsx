import React from "react";
import "./navbar.css";
import { RxAvatar } from "react-icons/rx";
import { IoRemoveOutline } from "react-icons/io5";
import { VscChromeMaximize } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/attica-gold-company-logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="company-logo">
        <img className="attica-logo" alt="logo" src={logo} />
      </div>
      <div className="sub-container">
        <div className="user-login">
          <RxAvatar />
          <div>login</div>
        </div>

        <div className="page-close">
          <IoRemoveOutline />
          <VscChromeMaximize />
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

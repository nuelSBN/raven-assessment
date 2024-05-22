import React from "react";
import logo from "assets/logo.svg";
import user from "assets/user.svg";
import line from "assets/line.svg";
import signout from "assets/sign-out.svg";
import arrowright from "assets/arrow-right.svg";

export default function DesktopHeader() {
  return (
    <div className="header__large">
      <div className="header__large-left">
        <div className="header__large-left-logo">
          <img src={logo} alt="" className="" />
        </div>
        <ul className="header__large-left-nav">
          <li className="header__large-left-navitem">
            <a href="#">Exchange</a>
          </li>
          <li className="header__large-left-navitem">
            <a href="#">Wallets</a>
          </li>
          <li className="header__large-left-navitem">
            <a href="#">Roqqu Hub</a>
          </li>
        </ul>
      </div>
      <div className="header__large-right">
        <div className="header__large-profile">
          <img src={user} alt="" />
          <span>Olakunle Te...</span>
          <img src={arrowright} alt="" />
        </div>
        <div>
          <img src={line} alt="" />
        </div>
        <div>
          <img src={signout} alt="" />
        </div>
      </div>
    </div>
  );
}

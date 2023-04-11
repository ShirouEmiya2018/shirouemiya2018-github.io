import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import logo from "./swap.png"

class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav>
        <div className="Title">
          <h1 className="navbar-logo">
            <img src={logo} id="mailogo" height={128} alt="CroborgSwap"/>
          </h1>
        </div>
      </nav>
    );
  }
}

export default NavBar;

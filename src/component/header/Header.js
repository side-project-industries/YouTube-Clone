import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <i className="logo fab fa-youtube fa-2x" />
          <span className="logo-font">YouTube</span>
        </div>
        <div>
          <input className="search" placeholder="Search" />
          <button className="search-button">
            <i className="fas fa-search" />
          </button>
        </div>
        <div>
          <i className="right-icons fas fa-video fa-lg" />
          <i className="right-icons fas fa-th fa-lg" />
          <i className="right-icons fas fa-share fa-lg" />
          <i className="right-icons fas fa-bell fa-lg" />
          <i className="right-icons fas fa-user-circle fa-2x" />
        </div>
      </div>
    );
  }
}

export default Header;

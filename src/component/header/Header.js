import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <i class="logo fab fa-youtube fa-2x" />
          <p>YouTube</p>
        </div>
        <div>
          <input placeholder="Search" />
          <button>
            <i class="fas fa-search" />
          </button>
        </div>
        <div>
          <i class="fas fa-video" />
          <i class="fas fa-th" />
          <i class="fas fa-share" />
          <i class="fas fa-bell" />
          <i class="fas fa-user-circle" />
        </div>
      </div>
    );
  }
}

export default Header;

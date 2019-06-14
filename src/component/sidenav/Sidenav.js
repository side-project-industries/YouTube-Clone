import React, { Component } from "react";
import "./Sidenav.css";

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <ul className="sidenav-list">
          <li className="sidenav-button"><i className="fas fa-lg fa-home"></i> Home</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-fire"></i> Trending</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-envelope-square"></i> Subscriptions</li>
          <br/>
          <li className="sidenav-button"><i className="fas fa-lg fa-folder"></i> Library</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-history"></i> History</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-clock"></i> Watch Later</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-thumbs-up"></i> Liked Videos</li>
          <li className="sidenav-button"><i className="fas fa-lg fa-heart"></i> Favorites</li>
          <br/>
          <h4>Subscriptions</h4>
          <li className="sidenav-button">{this.props.dataIHaventMadeYet}</li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;

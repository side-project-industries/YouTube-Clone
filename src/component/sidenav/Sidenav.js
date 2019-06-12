import React, { Component } from "react";

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-container">
        <ul>
          <li className="sidenav-button">Home</li>
          <li className="sidenav-button">Trending</li>
          <li className="sidenav-button">Subscriptions</li>
          <br/>
          <li className="sidenav-button">Library</li>
          <li className="sidenav-button">History</li>
          <li className="sidenav-button">Watch Later</li>
          <li className="sidenav-button">Liked Videos</li>
          <li className="sidenav-button">Favorites</li>
          <br/>
          <h4>Subscriptions</h4>
          <li className="sidenav-button">{this.props.dataIHaventMadeYet}</li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;

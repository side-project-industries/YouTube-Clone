import React, { Component } from "react";
import "./App.css";

import Header from "./component/header/Header";
import Sidenav from "./component/sidenav/Sidenav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidenav />
      </div>
    );
  }
}

export default App;

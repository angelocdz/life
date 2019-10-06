import React, { Component } from "react";
import Dog from "./Dog/Dog"
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Dog />
        <div>I AM ANOTHER DIV, NOT IN DOG COMPONENT</div>
      </div>
    );
  }
}

export default App;

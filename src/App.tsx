import React, { Component } from "react";
import Board from "./board";
import Heading from "./heading";
import "./index.css";
import { props, player } from "./interfaces";

class App extends Component<props> {
  state: props;

  constructor(props: props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div id="App">
        <Heading {...this.state} />
        <Board {...this.state} />
        <div id="Controls" />
        <div id="Vizualization" />
      </div>
    );
  }
}

export default App;

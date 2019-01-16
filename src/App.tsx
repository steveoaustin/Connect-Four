import React, { Component } from "react";
import Board from "./board";
import Heading from "./heading";
import "./index.css";
import { props, player, label } from "./interfaces";
import { render } from "react-dom";

class App extends Component<props> {
  state: props;

  constructor(props: props) {
    super(props);
    this.state = { ...props };
    this.onBoardChange = this.onBoardChange.bind(this);
  }

  onBoardChange(board: label[][], turn: number) {
    this.setState({ board: board, turn: turn });
  }

  render() {
    return (
      <div id="App">
        <Heading {...this.state} />
        <Board {...this.state} onBoardChange={this.onBoardChange} />
        <div id="Controls" />
        <div id="Vizualization" />
      </div>
    );
  }
}

export default App;

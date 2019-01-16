import React, { Component } from "react";
import Board from "./board";
import Heading from "./heading";
import "./index.css";
import { props, player, label } from "./interfaces";
import { render } from "react-dom";
import Controls from "./controls";

class App extends Component<props> {
  state: props;

  constructor(props: props) {
    super(props);
    this.state = { ...props };
    this.onControlChange = this.onControlChange.bind(this);
    this.onBoardChange = this.onBoardChange.bind(this);
    this.onWin = this.onWin.bind(this);
  }

  onControlChange(props: props) {
    this.setState({ props: props });
  }

  onBoardChange(board: label[][], turn: number) {
    this.setState({ board: board, turn: turn });
  }

  onWin(winner: player) {
    this.setState({ winner: winner });
  }

  render() {
    return (
      <div id="App">
        <Heading {...this.state} />
        <Board
          {...this.state}
          onBoardChange={this.onBoardChange}
          onWin={this.onWin}
        />
        <Controls {...this.state} onChange={this.onControlChange} />
        <div id="Vizualization" />
      </div>
    );
  }
}

export default App;

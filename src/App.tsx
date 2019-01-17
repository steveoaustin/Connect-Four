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
    this.onPlayer1Change = this.onPlayer1Change.bind(this);
    this.onPlayer2Change = this.onPlayer2Change.bind(this);
    this.onBoardChange = this.onBoardChange.bind(this);
    this.onWin = this.onWin.bind(this);
  }

  onPlayer1Change(player1: player) {
    this.setState({ player1: player1 });
  }

  onPlayer2Change(player2: player) {
    this.setState({ player2: player2 });
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
        <Controls
          {...this.state}
          onPlayer1Change={this.onPlayer1Change}
          onPlayer2Change={this.onPlayer2Change}
        />
        <div id="Vizualization" />
      </div>
    );
  }
}

export default App;

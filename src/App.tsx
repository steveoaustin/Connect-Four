import React, { Component } from "react";
import Board from "./board";
import Heading from "./heading";
import "./index.css";
import { props, player, label } from "./interfaces";
import { render } from "react-dom";
import Controls from "./controls";
import { generateBoard } from "./defaultProps";

class App extends Component<props> {
  state: props;

  constructor(props: props) {
    super(props);
    this.state = { ...props };
    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.onBoardChange = this.onBoardChange.bind(this);
    this.onWin = this.onWin.bind(this);
    this.onGameStart = this.onGameStart.bind(this);
    this.onGameReset = this.onGameReset.bind(this);
  }

  onPlayerChange(player1: player, player2: player) {
    this.setState({ player1: player1, player2: player2 });
  }

  onBoardChange(board: label[][], turn: number) {
    this.setState({ board: board, turn: turn, started: true });
  }

  onWin(winner: player) {
    this.setState({ winner: winner });
  }

  onGameStart() {
    this.setState({ started: true });
  }

  onGameReset() {
    this.setState({
      board: generateBoard(),
      turn: this.props.turn,
      started: this.props.started,
      winner: false
    });
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
          onPlayerChange={this.onPlayerChange}
          onGameStart={this.onGameStart}
          onGameReset={this.onGameReset}
        />
        <div id="Vizualization" />
      </div>
    );
  }
}

export default App;

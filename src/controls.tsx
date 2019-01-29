import React, { Component, FormEvent } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar,
  DropdownButton,
  Button
} from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { controlProps, props, player, label } from "./interfaces";
import {
  colorChoices,
  defaultDepth,
  evalFunctionDict,
  defaultEval
} from "./constants";
import ColorChoices from "./colorChoices";
import ComputerOptions from "./computerOptions";

const controls1 = "p1Controls";
const controls2 = "p2Controls";
const type = "t";
const color = "c";
const search = "s";

export default class Controls extends Component<controlProps> {
  constructor(props: controlProps) {
    super(props);
    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.onGameStart = this.onGameStart.bind(this);
    this.onGameReset = this.onGameReset.bind(this);
  }

  onPlayerChange(player1: player, player2: player) {
    this.props.onPlayerChange(player1, player2);
  }

  onGameStart() {
    this.props.onGameStart();
  }

  onGameReset() {
    this.props.onGameReset();
  }

  onPlayerTypeChange(event: any, player: player) {
    const target = event.target;
    const control = target.name;
    player.computer = target.value === "computer";
    if (player.computer) {
      player.searchOptions = {
        depth: +defaultDepth,
        evaluationFunction: evalFunctionDict[defaultEval]
      };
    } else {
      player.searchOptions = undefined;
    }
    player.label === label.player1
      ? this.onPlayerChange(player, this.props.player2)
      : this.onPlayerChange(this.props.player1, player);
  }

  playerControls(player: player) {
    return (
      <div id={player.label}>
        {player.label + ":"}
        <form>
          <ColorChoices {...this.props} player={player} />
          <ToggleButtonGroup
            onChange={() => this.onPlayerTypeChange(event, player)}
            bsStyle="primary"
            type="radio"
            name={player.label + type}
            defaultValue={player.computer ? "computer" : "human"}
          >
            <ToggleButton value={"human"} disabled={this.props.turn != 1}>
              Human
            </ToggleButton>
            <ToggleButton value={"computer"} disabled={this.props.turn != 1}>
              Computer
            </ToggleButton>
          </ToggleButtonGroup>
          <ComputerOptions {...this.props} player={player} />
        </form>
      </div>
    );
  }

  gameControls(player1: player) {
    if (player1.computer) {
      return (
        <div id="gameControls">
          <Button
            disabled={this.props.turn != 1}
            onClick={() => this.onGameStart()}
          >
            Start Game
          </Button>
          <Button
            disabled={this.props.turn == 1 || !this.props.winner}
            onClick={() => this.onGameReset()}
          >
            Reset Game
          </Button>
        </div>
      );
    }
    return (
      <div id="gameControls">
        <Button
          disabled={this.props.turn == 1}
          onClick={() => this.onGameReset()}
        >
          Reset Game
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div id="controlContainer">
        {this.gameControls(this.props.player1)}
        {this.playerControls(this.props.player1)}
        {this.playerControls(this.props.player2)}
      </div>
    );
  }
}

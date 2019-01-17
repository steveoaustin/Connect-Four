import React, { Component, FormEvent } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar,
  DropdownButton
} from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { controlProps, props, player, label } from "./interfaces";
import { colorChoices } from "./constants";
import ColorChoices from "./colorChoices";

const controls1 = "p1Controls";
const controls2 = "p2Controls";
const type = "t";
const color = "c";
const search = "s";

export default class Controls extends Component<controlProps> {
  constructor(props: controlProps) {
    super(props);
    this.onPlayerChange = this.onPlayerChange.bind(this);
  }

  onPlayerChange(player1: player, player2: player) {
    this.props.onPlayerChange(player1, player2);
  }

  onPlayerTypeChange(event: any) {
    const target = event.target;
    const control = target.name;

    // which player
    let player: player = this.props.player1;
    let setting = "";
    if (control.indexOf(controls2) != -1) {
      player = this.props.player2;
    }
    if (target.value === "human") player.computer = false;
    else player.computer = true;

    //this.onPlayerChange(player);
  }

  playerControls(player: player) {
    return (
      <div id={player.label}>
        <form onChange={() => this.onPlayerTypeChange(event)}>
          <ToggleButtonGroup
            bsStyle="primary"
            type="radio"
            name={player.label + type}
            defaultValue={"human"}
          >
            <ToggleButton value={"human"}>Human</ToggleButton>
            <ToggleButton value={"computer"}>Computer</ToggleButton>
          </ToggleButtonGroup>
          <ColorChoices {...this.props} player={player} />
        </form>
      </div>
    );
  }

  render() {
    return (
      <div id="controlContainer">
        {this.playerControls(this.props.player1)}
        {this.playerControls(this.props.player2)}
      </div>
    );
  }
}

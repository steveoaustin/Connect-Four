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

const controls1 = "p1Controls";
const controls2 = "p2Controls";
const type = "t";
const color = "c";
const search = "s";
let p1Colors = colorChoices;
let p2Colors = colorChoices;

export default class Controls extends Component<controlProps> {
  constructor(props: controlProps) {
    super(props);
    this.onPlayer1Change = this.onPlayer1Change.bind(this);
    this.onPlayer2Change = this.onPlayer2Change.bind(this);
  }

  manageColors() {
    p1Colors.filter(color => color != this.props.player2.color);
    p2Colors.filter(color => color != this.props.player1.color);
  }

  onPlayer1Change(player1: player) {
    this.props.onPlayer1Change(player1);
  }

  onPlayer2Change(player2: player) {
    this.props.onPlayer2Change(player2);
  }

  onPlayerColorChange(event: any, id: any) {
    // which player
    let player: player = this.props.player1;
    if (id.indexOf(controls2) != -1) {
      player = this.props.player2;
    }
    player.color = event.target.innerText;
    if (player.label === label.player1) this.onPlayer1Change(player);
    else this.onPlayer2Change(player);
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

    if (player.label === label.player1) this.onPlayer1Change(player);
    else this.onPlayer2Change(player);
  }

  playerControls(id: string) {
    return (
      <div id={id}>
        <form onChange={() => this.onPlayerTypeChange(event)}>
          <ToggleButtonGroup
            bsStyle="primary"
            type="radio"
            name={id + type}
            defaultValue={"human"}
          >
            <ToggleButton value={"human"}>Human</ToggleButton>
            <ToggleButton value={"computer"}>Computer</ToggleButton>
          </ToggleButtonGroup>
          <Dropdown
            className={id + color}
            options={id == controls1 ? p1Colors : p2Colors}
            onChange={() => this.onPlayerColorChange(event, id)}
            value={
              id == controls1
                ? this.props.player1.color
                : this.props.player2.color
            }
            placeholder="Choose a color"
          />
        </form>
      </div>
    );
  }

  render() {
    this.manageColors();
    return (
      <div id="controlContainer">
        {this.playerControls(controls1)}
        {this.playerControls(controls2)}
      </div>
    );
  }
}

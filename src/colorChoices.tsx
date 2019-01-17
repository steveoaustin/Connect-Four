import React, { Component, FormEvent } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { colorChoices } from "./constants";
import { colorControlProps, player, label } from "./interfaces";

export default class ColorChoices extends Component<colorControlProps> {
  constructor(props: colorControlProps) {
    super(props);
    this.onPlayerChange = this.onPlayerChange.bind(this);
    this.manageColors({ value: this.props.player.color });
  }

  onPlayerChange(player1: player, player2: player) {
    this.props.onPlayerChange(player1, player2);
  }

  manageColors(event: any) {
    const myColor = event.value;
    let opponent =
      this.props.player === this.props.player1
        ? this.props.player2
        : this.props.player1;
    const opponentColor = opponent.color;

    const myColorOptions = colorChoices.filter(color => color != opponentColor);
    const opponentColorOptions = colorChoices.filter(color => color != myColor);

    opponent = {
      ...opponent,
      color: opponentColor,
      colorOptions: opponentColorOptions
    };

    let me = {
      ...this.props.player,
      color: myColor,
      colorOptions: myColorOptions
    };

    me.label == label.player1
      ? this.onPlayerChange(me, opponent)
      : this.onPlayerChange(opponent, me);
  }

  render() {
    return (
      <Dropdown
        options={this.props.player.colorOptions}
        onChange={e => this.manageColors(e)}
        value={this.props.player.color}
        placeholder="Choose a color"
      />
    );
  }
}

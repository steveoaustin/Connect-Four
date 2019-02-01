import React, { Component, FormEvent } from "react";
import { individualControlProps, player, label } from "./interfaces";
import Dropdown from "react-dropdown";
import {
  depthOptions,
  defaultDepth,
  evalFunctionOptions,
  defaultEval,
  evalFunctionDict
} from "./constants";

export default class ComputerOptions extends Component<individualControlProps> {
  constructor(props: individualControlProps) {
    super(props);
    this.onPlayerChange = this.onPlayerChange.bind(this);
  }

  onPlayerChange(player1: player, player2: player) {
    this.props.onPlayerChange(player1, player2);
  }

  onDepthChange(event: any) {
    const depth = +event.value;
    const player = this.props.player;
    player.searchOptions!.depth = depth;
    player.label == label.player1
      ? this.onPlayerChange(player, this.props.player2)
      : this.onPlayerChange(this.props.player1, player);
  }

  onEvalChange(event: any) {
    const evalFunction = event.value as string;
    const player = this.props.player;
    player.searchOptions!.evaluationFunction = evalFunctionDict[evalFunction];
    player.label == label.player1
      ? this.onPlayerChange(player, this.props.player2)
      : this.onPlayerChange(this.props.player1, player);
  }

  render() {
    if (this.props.player.computer) {
      return (
        <div className="computerOptions">
          <div className="option">
            Search depth
            <Dropdown
              options={depthOptions}
              onChange={e => this.onDepthChange(e)}
              value={this.props.player.searchOptions!.depth.toString()}
              placeholder="Search depth"
            />
          </div>
          <div className="option">
            Evaluation Function
            <Dropdown
              options={evalFunctionOptions}
              onChange={e => this.onEvalChange(e)}
              value={this.props.player.searchOptions!.evaluationFunction.name}
              placeholder="Evaluation Function"
            />
          </div>
        </div>
      );
    }
    return null;
  }
}

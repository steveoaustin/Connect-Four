import React, { Component } from "react";
import { props, label } from "./interfaces";
import {
  gameWidth,
  gameHeight,
  topInterfaceHeight,
  defaultSectionSize,
  pieceSize
} from "./constants";
var d3 = require("d3");

export default class Board extends Component<props> {
  state: props;
  constructor(props: props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    d3.select("svg")
      .append("rect")
      .attr("x", 0)
      .attr("y", this.state.boardProps.sectionSize * topInterfaceHeight)
      .attr("width", this.state.boardProps.sectionSize * gameWidth)
      .attr("height", this.state.boardProps.sectionSize * gameHeight)
      .attr("fill", "yellow");

    let currentRow: number = 0;
    let currentColumn: number = 0;
    const board: label[][] = this.state.boardProps.board as label[][];
    board.forEach(row => {
      row.forEach(section => {
        d3.select("svg")
          .append("circle")
          .attr(
            "cx",
            currentColumn * defaultSectionSize + defaultSectionSize / 2
          )
          .attr("cy", currentRow * defaultSectionSize + defaultSectionSize / 2)
          .attr("r", pieceSize / 2)
          .attr("fill", "white");

        currentColumn++;
      });
      currentColumn = 0;
      currentRow++;
    });
  }

  render() {
    return (
      <div id="boardContainer">
        <svg
          className="Board"
          width={this.state.boardProps.sectionSize * gameWidth}
          height={
            this.state.boardProps.sectionSize *
            (gameHeight + topInterfaceHeight)
          }
        />
      </div>
    );
  }
}

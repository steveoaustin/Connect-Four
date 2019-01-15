import React, { Component } from "react";
import { props, label } from "./interfaces";
import {
  gameWidth,
  gameHeight,
  topInterfaceHeight,
  pieceSize,
  sectionSize
} from "./constants";
const d3 = require("d3");

export default class Board extends Component<props> {
  state: props;
  constructor(props: props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    d3.select("#Board")
      .append("rect")
      .attr("x", 0)
      .attr("y", sectionSize * topInterfaceHeight)
      .attr("width", sectionSize * gameWidth)
      .attr("height", sectionSize * gameHeight)
      .attr("fill", "yellow");

    let currentRow: number = 0;
    let currentColumn: number = 0;
    const board: label[][] = this.state.board as label[][];
    board.forEach(row => {
      row.forEach(section => {
        let color = "white";
        switch (section) {
          case label.player1:
            color = "red";
          case label.player2:
            color = "black";
        }

        d3.select("#Board")
          .append("circle")
          .attr("cx", currentColumn * sectionSize + sectionSize / 2)
          .attr("cy", currentRow * sectionSize + sectionSize / 2 + sectionSize)
          .attr("r", pieceSize / 2)
          .attr("fill", color);

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
          id="Board"
          width={sectionSize * gameWidth}
          height={sectionSize * (gameHeight + topInterfaceHeight)}
        />
      </div>
    );
  }
}

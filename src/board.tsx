import React, { Component } from "react";
import { props, label } from "./interfaces";
import {
  gameWidth,
  gameHeight,
  topInterfaceHeight,
  pieceSize,
  sectionSize,
  sectionSpacing,
  margin
} from "./constants";
const d3 = require("d3");

export default class Board extends Component<props> {
  state: props;
  constructor(props: props) {
    super(props);
    this.state = { ...props };
  }

  overlayPiece = (event: React.MouseEvent) => {
    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }

    d3.select("#inputOverlay")
      .attr("fill", this.state.turn % 2 === 1 ? "red" : "black")
      .transition()
      .duration(150)
      .ease(d3.easeElastic)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);
  };

  placePiece = (event: React.MouseEvent) => {
    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }

    let row = gameHeight - 1;
    for (let y = 0; y < gameHeight; y++) {
      if (this.state.board[y][column] != label.nobody) {
        row--;
      }
    }

    if (row < 0) {
      return; // row is full
    }

    d3.select("#Board")
      .append("circle")
      .attr("id", "piece" + this.state.turn)
      .attr("fill", this.state.turn % 2 === 1 ? "red" : "black")
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);

    let newBoard = this.state.board;
    newBoard[row][column] =
      this.state.turn % 2 === 1 ? label.player1 : label.player2;

    d3.select("#piece" + this.state.turn)
      .transition()
      .duration(150 + 100 * row)
      .ease(d3.easeBounce)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", row * sectionSize + sectionSize / 2 + sectionSize + margin)
      .attr("r", pieceSize / 2);

    // swap the color of input overlay to cause "instant" transition
    d3.select("#inputOverlay").attr(
      "fill",
      (this.state.turn + 1) % 2 === 1 ? "red" : "black"
    );

    this.setState((state: props) => {
      return { board: newBoard, turn: state.turn + 1 };
    });
  };

  getColumn = (event: React.MouseEvent) => {
    const boardPosition = document!
      .getElementById("Board")!
      .getBoundingClientRect();

    const position: { x: number; y: number } = {
      x: event.clientX - boardPosition.left,
      y: event.clientY - boardPosition.top
    };

    return (
      (position.x - margin - ((position.x - margin) % sectionSize)) /
      sectionSize
    );
  };

  drawBoard() {
    let currentRow: number = 0;
    let currentColumn: number = 0;
    const board: label[][] = this.state.board as label[][];
    board.forEach(row => {
      row.forEach(section => {
        let color = "white";
        switch (section) {
          case label.player1:
            color = "red";
            break;
          case label.player2:
            color = "black";
        }

        d3.select("#Board")
          .append("circle")
          .attr("cx", currentColumn * sectionSize + sectionSize / 2 + margin)
          .attr(
            "cy",
            currentRow * sectionSize + sectionSize / 2 + sectionSize + margin
          )
          .attr("r", pieceSize / 2)
          .attr("fill", color);

        currentColumn++;
      });
      currentColumn = 0;
      currentRow++;
    });
  }

  componentDidMount() {
    d3.select("#Board")
      .append("rect")
      .attr("x", 0)
      .attr("y", sectionSize * topInterfaceHeight)
      .attr("width", sectionSize * gameWidth + margin * 2)
      .attr("height", sectionSize * gameHeight + margin * 2)
      .attr("fill", "yellow");

    // draw lines indicating input areas
    for (let x = 0; x <= gameWidth; x++) {
      d3.select("#Board")
        .append("line")
        .attr("x1", x * sectionSize + margin)
        .attr("x2", x * sectionSize + margin)
        .attr("y1", sectionSpacing)
        .attr("y2", topInterfaceHeight * sectionSize - sectionSpacing)
        .attr("stroke-width", "2")
        .attr("stroke-linecap", "round")
        .attr("stroke", "SteelBlue");
    }

    this.drawBoard();

    // add placeholder circle for input overlay
    d3.select("#Board")
      .append("circle")
      .attr("id", "inputOverlay")
      .attr("cx", sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2)
      .attr("fill", "white");
  }

  render() {
    return (
      <div id="boardContainer">
        <svg
          onPointerMove={this.overlayPiece}
          onMouseOver={this.overlayPiece}
          onClick={this.placePiece}
          id="Board"
          width={sectionSize * gameWidth + margin * 2}
          height={sectionSize * (gameHeight + topInterfaceHeight) + margin * 2}
        />
      </div>
    );
  }
}

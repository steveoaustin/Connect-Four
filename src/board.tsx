import React, { Component } from "react";
import { boardProps, label, player } from "./interfaces";
import {
  gameWidth,
  gameHeight,
  topInterfaceHeight,
  pieceSize,
  sectionSize,
  sectionSpacing,
  margin,
  backgroundColor,
  winSequence
} from "./constants";
import { checkWin } from "./intelligence";
import { line } from "d3";
const d3 = require("d3");

export default class Board extends Component<boardProps> {
  constructor(props: boardProps) {
    super(props);
    this.onBoardChange = this.onBoardChange.bind(this);
    this.onWin = this.onWin.bind(this);
  }

  onBoardChange(board: label[][], turn: number) {
    this.props.onBoardChange(board, turn);
  }

  onWin(winner: player) {
    this.props.onWin(winner);
  }

  overlayPiece = (event: React.MouseEvent) => {
    if (this.props.winner) {
      return; // no overlays after win
    }
    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }

    d3.select("#inputOverlay")
      .attr(
        "fill",
        this.props.turn % 2 === 1
          ? this.props.player1.color
          : this.props.player2.color
      )
      .transition()
      .duration(150)
      .ease(d3.easeElastic)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);
  };

  placePiece = (event: React.MouseEvent) => {
    if (this.props.winner) {
      return; // can't place pieces after win
    }
    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }

    const player =
      this.props.turn % 2 === 1 ? this.props.player1 : this.props.player2;

    let row = gameHeight - 1;
    for (let y = 0; y < gameHeight; y++) {
      if (this.props.board[y][column] != label.nobody) {
        row--;
      }
    }

    if (row < 0) {
      return; // row is full
    }

    d3.select("#Board")
      .append("circle")
      .attr("id", "piece" + this.props.turn)
      .attr("class", "pieces")
      .attr("fill", player.color)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);

    let newBoard = this.props.board;
    newBoard[row][column] = player.label;

    d3.select("#piece" + this.props.turn)
      .transition()
      .duration(150 + 100 * row)
      .ease(d3.easeBounce)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", row * sectionSize + sectionSize / 2 + sectionSize + margin)
      .attr("r", pieceSize / 2);

    this.onBoardChange(newBoard, this.props.turn + 1);

    const winnerCoordinates = checkWin(player.label, newBoard);

    if (winnerCoordinates) {
      this.onWin(player);
      this.showWinner(winnerCoordinates, player);
    } else {
      // swap the color of input overlay to cause "instant" transition
      d3.select("#inputOverlay").attr(
        "fill",
        (this.props.turn + 1) % 2 == 1
          ? this.props.player1.color
          : this.props.player2.color
      );
    }
  };

  showWinner(
    coordinates: { x1: number; y1: number; x2: number; y2: number },
    player: player
  ) {
    // hide overlay piece when the game is over
    d3.select("#inputOverlay").attr("fill", backgroundColor);

    d3.select("#Board")
      .append("line")
      .attr("id", "winLineOuter")
      .attr("stroke-width", "8")
      .attr("stroke-linecap", "round")
      .attr("stroke", "black")
      .attr("x1", this.getPieceXCoordinates(coordinates.x1))
      .attr("y1", this.getPieceYCoordinates(coordinates.y1))
      .attr("x2", this.getPieceXCoordinates(coordinates.x1))
      .attr("y2", this.getPieceYCoordinates(coordinates.y1));

    d3.select("#Board")
      .append("line")
      .attr("id", "winLineInner")
      .attr("stroke-width", "5")
      .attr("stroke-linecap", "round")
      .attr("stroke", "white")
      .attr("x1", this.getPieceXCoordinates(coordinates.x1))
      .attr("y1", this.getPieceYCoordinates(coordinates.y1))
      .attr("x2", this.getPieceXCoordinates(coordinates.x1))
      .attr("y2", this.getPieceYCoordinates(coordinates.y1));

    d3.select("#winLineOuter")
      .transition()
      .ease(d3.easeExp)
      .duration(200 * winSequence)
      .attr("x2", this.getPieceXCoordinates(coordinates.x2))
      .attr("y2", this.getPieceYCoordinates(coordinates.y2));

    d3.select("#winLineInner")
      .transition()
      .ease(d3.easeExp)
      .duration(200 * winSequence)
      .attr("x2", this.getPieceXCoordinates(coordinates.x2))
      .attr("y2", this.getPieceYCoordinates(coordinates.y2));
  }

  getPieceXCoordinates(arrayCoordinate: number) {
    return arrayCoordinate * sectionSize + sectionSize / 2 + margin;
  }
  getPieceYCoordinates(arrayCoordinate: number) {
    return (
      arrayCoordinate * sectionSize + sectionSize + sectionSize / 2 + margin
    );
  }

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
    const board = this.props.board;
    board.forEach(row => {
      row.forEach(section => {
        d3.select("#Board")
          .append("circle")
          .attr("cx", this.getPieceXCoordinates(currentColumn))
          .attr("cy", this.getPieceYCoordinates(currentRow))
          .attr("r", pieceSize / 2)
          .attr("fill", backgroundColor);

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
      .attr("fill", backgroundColor);
  }

  render() {
    return (
      <div id="boardContainer">
        <svg
          id="Board"
          onPointerMove={this.overlayPiece}
          onMouseOver={this.overlayPiece}
          onClick={this.placePiece}
          width={sectionSize * gameWidth + margin * 2}
          height={sectionSize * (gameHeight + topInterfaceHeight) + margin * 2}
        />
      </div>
    );
  }
}

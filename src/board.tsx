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
import { checkWin, getMove } from "./intelligence";
import { line } from "d3";
const d3 = require("d3");
const computer = require("./resources/computer.png");
const human = require("./resources/human.png");
const fontSize = 30;
const imageOffset = 110;
let activeTurn: boolean;

export default class Board extends Component<boardProps> {
  constructor(props: boardProps) {
    super(props);
    this.onBoardChange = this.onBoardChange.bind(this);
    this.onWin = this.onWin.bind(this);
    activeTurn = false;
  }

  computerMove() {
    const player =
      this.props.turn % 2 == 1 ? this.props.player1 : this.props.player2;
    if (!player.computer) return;
    const column = getMove(
      player,
      player.label === label.player1 ? this.props.player2 : this.props.player1,
      this.props.board
    );
    if (column === null) throw Error("next move not calculated");
    this.placePiece(column, player);
  }

  onBoardChange(board: label[][], turn: number) {
    this.props.onBoardChange(board, turn, () => this.computerMove());
  }

  onWin(winner: player, board: label[][]) {
    this.props.onWin(winner, board);
  }

  overlayPiece = (event: React.MouseEvent) => {
    if (this.props.winner || activeTurn) {
      return; // no overlays after win or during animation
    }
    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }

    const player =
      this.props.turn % 2 === 1 ? this.props.player1 : this.props.player2;

    if (player.computer) {
      d3.select("#inputOverlay").attr("fill", backgroundColor);
      return; // only humans overlay pieces
    }

    d3.select("#inputOverlay")
      .attr("fill", player.color)
      .transition()
      .duration(150)
      .ease(d3.easeElastic)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);
  };

  placePiece(column: number, player: player) {
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
      .attr("class", player.label)
      .attr("fill", player.color)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", sectionSize / 2)
      .attr("r", pieceSize / 2);
    activeTurn = true;

    let newBoard = this.props.board;
    newBoard[row][column] = player.label;
    // hide overlay until the next turn
    d3.select("#inputOverlay").attr("fill", backgroundColor);

    d3.select("#piece" + this.props.turn)
      .transition()
      .duration(400)
      .ease(d3.easeBounce)
      .attr("cx", column * sectionSize + sectionSize / 2 + margin)
      .attr("cy", row * sectionSize + sectionSize / 2 + sectionSize + margin)
      .attr("r", pieceSize / 2)
      .transition()
      .duration(100)
      .on("end", () => {
        this.piecePlaced(player, newBoard);
      });
  }

  piecePlaced(player: player, newBoard: label[][]) {
    const winnerCoordinates = checkWin(player.label, newBoard);

    if (winnerCoordinates) {
      this.onWin(player, newBoard);
      this.showWinner(winnerCoordinates, player);
    } else {
      this.onBoardChange(newBoard, this.props.turn + 1);
    }
    activeTurn = false;
  }

  clickToPlacePiece = (event: React.MouseEvent) => {
    if (this.props.winner || activeTurn) {
      return; // can't place pieces after win or during turn
    }

    const player =
      this.props.turn % 2 === 1 ? this.props.player1 : this.props.player2;
    if (player.computer) {
      return; // only humans click to place
    }

    const column = this.getColumn(event);
    if (column >= gameWidth) {
      return; // avoid rendering outside of the board
    }
    this.placePiece(column, player);
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

  resetBoard() {
    d3.selectAll("." + this.props.player1.label).remove();
    d3.selectAll("." + this.props.player2.label).remove();
    d3.selectAll("#winLineOuter").remove();
    d3.selectAll("#winLineInner").remove();
    d3.select("#inputOverlay").attr("fill", backgroundColor);
  }

  getImageAndPlayer() {
    let playerNum = this.props.turn % 2;
    let currentPlayer: player;
    switch (playerNum) {
      case 1:
        currentPlayer = this.props.player1;
        break;
      default:
        currentPlayer = this.props.player2;
        playerNum = 2; // display 2 instead of 0
    }

    const image = currentPlayer.computer ? computer : human;

    return { currentPlayer: currentPlayer, playerNum: playerNum, image: image };
  }

  updateHeading() {
    const turnData = this.getImageAndPlayer();
    if (this.props.winner) {
      const image = turnData.image;

      d3.select("#headingText")
        .attr("fill", turnData.currentPlayer.color)
        .text(this.props.winner.label + " Wins!");

      d3.select("#leftImage").attr("xlink:href", image);
      d3.select("#rightImage").attr("xlink:href", image);
    } else if (this.props.turn > gameWidth * gameHeight) {
      d3.select("#headingText")
        .attr("fill", "SteelBlue")
        .text("Tie Game");

      d3.select("#leftImage").remove();
      d3.select("#rightImage").remove();
    } else {
      d3.select("#headingText")
        .attr("fill", turnData.currentPlayer.color)
        .text("Player " + turnData.playerNum + "'s turn");

      d3.select("#leftImage").attr("xlink:href", turnData.image);
      d3.select("#rightImage").attr("xlink:href", turnData.image);
    }
  }

  componentDidUpdate() {
    this.updateHeading();
    if (!this.props.started) {
      this.resetBoard();
      return;
    } else if (this.props.turn === 1) {
      this.computerMove();
    }

    d3.selectAll("." + this.props.player1.label).attr(
      "fill",
      this.props.player1.color
    );
    d3.selectAll("." + this.props.player2.label).attr(
      "fill",
      this.props.player2.color
    );

    if (this.props.winner) return;

    const player =
      this.props.turn % 2 === 1 ? this.props.player1 : this.props.player2;

    d3.select("#inputOverlay").attr(
      "fill",
      player.computer ? backgroundColor : player.color
    );
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

    const turnData = this.getImageAndPlayer();

    d3.select("#Heading")
      .append("text")
      .attr("id", "headingText")
      .attr("x", (sectionSize * gameWidth) / 2)
      .attr("y", sectionSize / 2)
      .attr("font-family", "sans-serif")
      .attr("font-size", "30px")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", turnData.currentPlayer.color)
      .text("Player " + turnData.playerNum + "'s turn");

    d3.select("#Heading")
      .append("svg:image")
      .attr("id", "leftImage")
      .attr("xlink:href", turnData.image)
      .attr("x", imageOffset)
      .attr("y", sectionSize / 2 - fontSize / 2)
      .attr("width", fontSize)
      .attr("height", fontSize);

    d3.select("#Heading")
      .append("svg:image")
      .attr("id", "rightImage")
      .attr("xlink:href", turnData.image)
      .attr("x", sectionSize * gameWidth - fontSize - imageOffset)
      .attr("y", sectionSize / 2 - fontSize / 2)
      .attr("width", fontSize)
      .attr("height", fontSize);
  }

  render() {
    return (
      <div id="boardContainer">
        <div id="headingContainer">
          <svg
            id="Heading"
            width={sectionSize * gameWidth}
            height={sectionSize}
          />
        </div>
        <svg
          id="Board"
          onPointerMove={this.overlayPiece}
          onMouseOver={this.overlayPiece}
          onClick={this.clickToPlacePiece}
          width={sectionSize * gameWidth + margin * 2}
          height={sectionSize * (gameHeight + topInterfaceHeight) + margin * 2}
        />
      </div>
    );
  }
}

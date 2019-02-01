import React, { Component } from "react";
import { props, player, label } from "./interfaces";
import { gameWidth, sectionSize } from "./constants";
var d3 = require("d3");
const computer = require("./resources/computer.png");
const human = require("./resources/human.png");
const fontSize = 30;
const imageOffset = 110;

export default class Heading extends Component<props> {
  constructor(props: props) {
    super(props);
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
    } else {
      d3.select("#headingText")
        .attr("fill", turnData.currentPlayer.color)
        .text("Player " + turnData.playerNum + "'s turn");

      d3.select("#leftImage").attr("xlink:href", turnData.image);
      d3.select("#rightImage").attr("xlink:href", turnData.image);
    }
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

  componentDidUpdate() {
    console.log("updating heading");
    this.updateHeading();
  }

  componentDidMount() {
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
      <div id="headingContainer">
        <svg
          id="Heading"
          width={sectionSize * gameWidth}
          height={sectionSize}
        />
      </div>
    );
  }
}

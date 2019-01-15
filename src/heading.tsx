import React, { Component } from "react";
import { props, player } from "./interfaces";
import { gameWidth, sectionSize } from "./constants";
var d3 = require("d3");
const computer = require("./resources/computer.png");
const human = require("./resources/human.png");
const fontSize = 30;
const imageOffset = 110;

export default class Heading extends Component<props> {
  state: props;
  constructor(props: props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    let playerNum = this.state.turn % 2;
    let currentPlayer: player;
    switch (playerNum) {
      case 1:
        currentPlayer = this.state.player1;
        break;
      default:
        currentPlayer = this.state.player2;
        playerNum = 2; // display 2 instead of 0
    }

    let image;
    if (currentPlayer.computer) {
      image = computer;
    } else {
      image = human;
    }

    d3.select("#Heading")
      .append("text")
      .attr("id", "headingText")
      .attr("x", (sectionSize * gameWidth) / 2)
      .attr("y", sectionSize / 2)
      .attr("font-family", "sans-serif")
      .attr("font-size", "30px")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", currentPlayer.color)
      .text("Player " + playerNum + "'s turn");

    d3.select("#Heading")
      .append("svg:image")
      .attr("xlink:href", image)
      .attr("x", imageOffset)
      .attr("y", sectionSize / 2 - fontSize / 2)
      .attr("width", fontSize)
      .attr("height", fontSize);

    d3.select("#Heading")
      .append("svg:image")
      .attr("xlink:href", image)
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

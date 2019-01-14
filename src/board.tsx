import React, { Component } from "react";
import { props } from "./interfaces";
import { gameWidth, gameHeight } from "./constants";
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
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", this.state.boardProps.sectionSize * gameWidth)
      .attr("height", this.state.boardProps.sectionSize * gameHeight)
      .attr("fill", "yellow");
  }

  render() {
    return <svg className="Board" width="1000" height="1000" />;
  }
}

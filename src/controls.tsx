import React, { Component, FormEvent } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar
} from "react-bootstrap";
import { controlProps, props } from "./interfaces";

const controls1 = "p1Controls";
const controls2 = "p2Controls";
const type = "t";

export default class Controls extends Component<controlProps> {
  constructor(props: controlProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(props: props) {
    this.props.onChange(props);
  }

  onPlayerChange(event: any) {
    if (event === undefined) {
      return;
    }
    const target = event.target;
    if (target === null) {
      return;
    }

    console.log(target.value);
  }

  playerControls(id: string) {
    return (
      <div id={id}>
        <form onChange={() => this.onPlayerChange(event)}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name={id + "type"}
              defaultValue={"human"}
            >
              <ToggleButton value={"human"}>Human</ToggleButton>
              <ToggleButton value={"computer"}>Computer</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div id="controlContainer">
        {this.playerControls(controls1)}
        {this.playerControls(controls2)}
      </div>
    );
  }
}

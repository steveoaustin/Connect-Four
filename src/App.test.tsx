import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defaultProps } from "./defaultProps";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

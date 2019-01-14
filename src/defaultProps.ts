import { label, player, props } from "./interfaces";
import { defaultSectionSize } from "./constants";

const board: label[][] = [
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ],
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ],
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ],
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ],
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ],
  [
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody,
    label.nobody
  ]
];

export const defaultProps: props = {
  boardProps: {
    board: board,
    sectionSize: defaultSectionSize,
    player1: { computer: false, color: "red" },
    player2: { computer: false, color: "black" }
  }
};

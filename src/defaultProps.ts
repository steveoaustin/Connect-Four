import { label, player, props } from "./interfaces";

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
  board: board,
  player1: { computer: false, color: "red" },
  player2: { computer: false, color: "black" },
  turn: 1
};

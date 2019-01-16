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
  player1: { computer: false, label: label.player1, color: "green" },
  player2: { computer: false, label: label.player2, color: "orange" },
  turn: 1,
  winner: false
};

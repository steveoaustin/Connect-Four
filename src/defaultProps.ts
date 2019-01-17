import { label, player, props } from "./interfaces";
import { colorChoices } from "./constants";

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
  player1: {
    computer: false,
    label: label.player1,
    color: "red",
    colorOptions: colorChoices
  },
  player2: {
    computer: false,
    label: label.player2,
    color: "black",
    colorOptions: colorChoices
  },
  turn: 1,
  winner: false
};

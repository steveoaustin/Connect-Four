import { label, player, props } from "./interfaces";
import { colorChoices, gameHeight, gameWidth } from "./constants";

export function generateBoard() {
  let board: label[][] = [];
  for (let r: number = 0; r < gameHeight; r++) {
    board[r] = [];
    for (let c: number = 0; c < gameWidth; c++) {
      board[r][c] = label.nobody;
    }
  }
  return board;
}

export const defaultProps: props = {
  board: generateBoard(),
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
  started: false,
  winner: false
};

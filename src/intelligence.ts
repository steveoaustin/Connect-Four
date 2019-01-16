import { searchOptions, label, player } from "./interfaces";
import { gameHeight, gameWidth, winSequence } from "./constants";

export default class intellignece {}

export function simpleEvaluationFunction(board: label[][]) {
  return 0;
}

export function complexEvaluationFunction(board: label[][]) {
  return 0;
}

export function checkWin(label: label, board: label[][]) {
  let currentSequence = 0;
  // horizontal
  for (let row = 0; row < gameHeight; row++) {
    for (let column = 0; column <= gameWidth - winSequence; column++) {
      for (let i = 0; i < winSequence; i++) {
        if (board[row][column + i] === label) {
          currentSequence++;
        }
      }
      if (currentSequence === winSequence) {
        return { x1: column, y1: row, x2: column + winSequence - 1, y2: row };
      }
      currentSequence = 0;
    }
  }

  // vertical
  for (let row = 0; row <= gameHeight - winSequence; row++) {
    for (let column = 0; column < gameWidth; column++) {
      for (let i = 0; i < winSequence; i++) {
        if (board[row + i][column] === label) {
          currentSequence++;
        }
      }
      if (currentSequence === winSequence) {
        return { x1: column, y1: row, x2: column, y2: row + winSequence - 1 };
      }
      currentSequence = 0;
    }
  }

  // diagonal 'down'
  for (let row = 0; row <= gameHeight - winSequence; row++) {
    for (let column = 0; column <= gameWidth - winSequence; column++) {
      for (let i = 0; i < winSequence; i++) {
        if (board[row + i][column + i] === label) {
          currentSequence++;
        }
      }
      if (currentSequence === winSequence) {
        return {
          x1: column,
          y1: row,
          x2: column + winSequence - 1,
          y2: row + winSequence - 1
        };
      }
      currentSequence = 0;
    }
  }

  // diagonal 'up'
  for (let row = gameHeight - 1; row >= winSequence; row--) {
    for (let column = 0; column <= gameWidth - winSequence; column++) {
      for (let i = 0; i < winSequence; i++) {
        if (board[row - i][column + i] === label) {
          currentSequence++;
        }
      }
      if (currentSequence === winSequence) {
        return {
          x1: column,
          y1: row,
          x2: column + winSequence - 1,
          y2: row - winSequence + 1
        };
      }
      currentSequence = 0;
    }
  }
  return false;
}

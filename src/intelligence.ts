import { searchOptions, label, player, coordinates } from "./interfaces";
import { gameHeight, gameWidth, winSequence, sequencePower } from "./constants";
import { number } from "prop-types";
import { generateBoard } from "./defaultProps";

export function getMove(me: player, opponent: player, board: label[][]) {
  const moves: number[] = possibleMoves(board);
  let bestMove: number[] = [];
  let bestMoveValue: number = Number.MIN_SAFE_INTEGER;
  const options = me.searchOptions;
  if (!options) {
    throw Error("getting move for human");
  }
  const depth = options.depth;
  for (let move in moves) {
    const successor = applyMove(copyBoard(board), moves[move], me);
    const value = minV(
      successor,
      me,
      opponent,
      depth,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
    if (value > bestMoveValue) {
      bestMoveValue = value;
      bestMove = [];
      bestMove.push(moves[move]);
    } else if (value === bestMoveValue) {
      bestMove.push(moves[move]);
    }
  }
  return bestMove[Math.floor(bestMove.length * Math.random())];
}

function minV(
  board: label[][],
  me: player,
  opponent: player,
  depth: number,
  alpha: number,
  beta: number
) {
  if (terminalState(board)) {
    return me.searchOptions!.evaluationFunction(board, me, opponent);
  } else if (depth == 0) {
    return me.searchOptions!.evaluationFunction(board, me, opponent);
  }

  let value: number = Number.MAX_SAFE_INTEGER;
  const moves: number[] = possibleMoves(board);
  for (let move in moves) {
    const successor = applyMove(copyBoard(board), moves[move], opponent);
    const maxValue = maxV(successor, me, opponent, depth - 1, alpha, beta);
    value = Math.min(value, maxValue);
    beta = Math.min(beta, maxValue);
    if (beta <= alpha) {
      return maxValue;
    }
  }
  return value;
}

function maxV(
  board: label[][],
  me: player,
  opponent: player,
  depth: number,
  alpha: number,
  beta: number
) {
  if (terminalState(board)) {
    return me.searchOptions!.evaluationFunction(board, me, opponent);
  } else if (depth == 0) {
    return me.searchOptions!.evaluationFunction(board, me, opponent);
  }

  let value: number = Number.MIN_SAFE_INTEGER;
  const moves: number[] = possibleMoves(board);

  for (let move in moves) {
    const successor = applyMove(copyBoard(board), moves[move], me);
    const minValue = minV(successor, me, opponent, depth - 1, alpha, beta);
    value = Math.max(value, minValue);
    alpha = Math.max(alpha, value);
    if (alpha >= beta) {
      return value;
    }
  }
  return value;
}

export function terminalState(board: label[][]) {
  if (checkWin(label.player1, board) || checkWin(label.player2, board)) {
    return true;
  }
  let fullColumns = 0;
  for (let c = 0; c < gameWidth; c++) {
    if (board[0][c] != label.nobody) fullColumns++;
  }
  if (fullColumns === gameWidth) return true;
  return false;
}

function possibleMoves(board: label[][]) {
  const result = [];
  for (let c = 0; c < gameWidth; c++) {
    if (board[0][c] === label.nobody) {
      result.push(c);
    }
  }
  return result;
}

function applyMove(board: label[][], column: number, player: player) {
  let row = gameHeight - 1;
  for (let r = 0; r < gameHeight; r++) {
    if (board[r][column] != label.nobody) row--;
  }

  if (row < 0) {
    console.error(row, board);
    throw new Error("Illegal move");
  }

  board[row][column] = player.label;
  return board;
}

function copyBoard(board: label[][]) {
  const newBoard: label[][] = [];
  for (let r = 0; r < gameHeight; r++) {
    newBoard[r] = [];
    for (let c = 0; c < gameWidth; c++) {
      newBoard[r][c] = board[r][c];
    }
  }
  return newBoard;
}

export function Simple(board: label[][], me: player, opponent: player) {
  if (checkWin(me.label, board)) {
    return 1;
  } else if (checkWin(opponent.label, board)) {
    return -1;
  } else {
    return 0;
  }
}

export function Complex(board: label[][], me: player, opponent: player) {
  if (checkWin(me.label, board)) {
    return Number.MAX_SAFE_INTEGER;
  } else if (checkWin(opponent.label, board)) {
    return Number.MIN_SAFE_INTEGER;
  } else {
    return potentialSequences(board, me) - potentialSequences(board, opponent);
  }
}

function potentialSequences(board: label[][], player: player) {
  let result = 0;
  result += checkVertical(board, player);
  result += checkHorizontal(board, player);
  result += checkDiagonalDown(board, player);
  result += checkDiagonalUp(board, player);
  return result;
}

function checkVertical(board: label[][], player: player) {
  let result = 0;
  for (let c = 0; c < gameWidth; c++) {
    let sequence = 0;
    let potentialSequence = 0;
    for (let r = gameHeight - 1; r >= 0; r--) {
      if (board[r][c] === player.label) {
        sequence++;
        potentialSequence++;
      } else if (board[r][c] != label.nobody) {
        sequence = 0; // clear the sequence if it is blocked
        potentialSequence = 0;
      } else {
        potentialSequence++;
      }
    }
    if (potentialSequence >= winSequence) {
      result += Math.pow(sequence, sequencePower);
    }
  }
  return result;
}

function checkHorizontal(board: label[][], player: player) {
  let result = 0;
  for (let r = 0; r < gameHeight; r++) {
    let sequence = 0;
    let potentialSequence = 0;
    for (let c = 0; c < gameWidth; c++) {
      if (board[r][c] === player.label) {
        sequence++;
        potentialSequence++;
      } else if (board[r][c] != label.nobody) {
        if (potentialSequence >= winSequence) {
          result += Math.pow(sequence, sequencePower);
        }
        sequence = 0; // clear the sequence if it is blocked
        potentialSequence = 0;
      } else {
        potentialSequence++;
      }
    }
    if (potentialSequence >= winSequence) {
      result += Math.pow(sequence, sequencePower);
    }
  }
  return result;
}

function checkDiagonalDown(board: label[][], player: player) {
  let result = 0;
  for (let r = 0; r < gameHeight - winSequence; r++) {
    for (let c = 0; c < gameWidth - winSequence; c++) {
      let sequence = 0;
      let potentialSequence = 0;
      for (let i = 0; i < winSequence; i++) {
        if (board[r + i][c + i] == player.label) {
          sequence++;
          potentialSequence++;
        } else if (board[r + i][c + i] != label.nobody) {
          sequence = 0;
          potentialSequence = 0;
        } else {
          potentialSequence++;
        }
      }
      if (potentialSequence >= winSequence) {
        result += Math.pow(sequence, sequencePower);
      }
    }
  }
  return result;
}

function checkDiagonalUp(board: label[][], player: player) {
  let result = 0;
  for (let r = gameHeight - 1; r > winSequence; r--) {
    for (let c = 0; c < gameWidth - winSequence; c++) {
      let sequence = 0;
      let potentialSequence = 0;
      for (let i = 0; i < winSequence; i++) {
        if (board[r - i][c + i] == player.label) {
          sequence++;
          potentialSequence++;
        } else if (board[r - i][c + i] != label.nobody) {
          sequence = 0;
          potentialSequence = 0;
        } else {
          potentialSequence++;
        }
      }
      if (potentialSequence >= winSequence) {
        result += Math.pow(sequence, sequencePower);
      }
    }
  }
  return result;
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

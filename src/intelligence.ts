import { searchOptions, label, player } from "./interfaces";
import { gameHeight, gameWidth, winSequence } from "./constants";

export function getMove(me: player, opponent: player, board: label[][]) {
  const moves: number[] = possibleMoves(board);
  let bestMove: number = 0;
  let bestMoveValue: number = Number.MIN_SAFE_INTEGER;
  const options = me.searchOptions;
  if (!options) {
    throw Error("getting result for human player");
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
      bestMove = moves[move];
    }
  }
  return bestMove;
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
    if (maxValue <= alpha) {
      return maxValue;
    }
    beta = Math.min(beta, maxValue);
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
    if (value >= beta) {
      return value;
    }
    alpha = Math.max(alpha, value);
  }
  return value;
}

function terminalState(board: label[][]) {
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

export function simpleEvaluationFunction(
  board: label[][],
  me: player,
  opponent: player
) {
  if (checkWin(me.label, board)) {
    return 1;
  } else if (checkWin(opponent.label, board)) {
    return -1;
  } else {
    return 0;
  }
}

export function complexEvaluationFunction(
  board: label[][],
  me: player,
  opponent: player
) {
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

export interface player {
  computer: boolean;
  color: string;
  label: label;
  searchOptions?: searchOptions;
}

export interface searchOptions {
  depth: number;
  evaluationFunction: (board: label[][]) => number;
}

export enum label {
  nobody = "nobody",
  player1 = "player1",
  player2 = "player2"
}

export interface props {
  board: label[][];
  player1: player;
  player2: player;
  turn: number;
  winner: label;
}

export interface boardProps extends props {
  onBoardChange: (board: label[][], turn: number) => void;
  onWin: (winner: label) => void;
}

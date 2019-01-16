export interface player {
  computer: boolean;
  color: string;
  searchOptions?: searchOptions;
}

export interface searchOptions {
  depth: number;
  evaluationFunction: (board: label[][]) => number;
}

export enum label {
  nobody = 0,
  player1 = 1,
  player2 = 2
}

export interface props {
  board: label[][];
  player1: player;
  player2: player;
  turn: number;
}

export interface boardProps extends props {
  onBoardChange: (board: label[][], turn: number) => void;
}

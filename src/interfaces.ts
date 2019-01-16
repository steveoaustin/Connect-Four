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
  player1 = "Player 1",
  player2 = "Player 2"
}

export interface props {
  board: label[][];
  player1: player;
  player2: player;
  turn: number;
  winner: player | false;
}

export interface controlProps extends props {
  onChange: (props: props) => void;
}

export interface boardProps extends props {
  onBoardChange: (board: label[][], turn: number) => void;
  onWin: (winner: player) => void;
}

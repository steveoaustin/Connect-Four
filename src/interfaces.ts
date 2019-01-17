export interface player {
  computer: boolean;
  color: string;
  colorOptions: string[];
  label: label;
  searchOptions?: searchOptions;
}

export interface searchOptions {
  depth: number;
  evaluationFunction: (board: label[][]) => number;
}

export enum label {
  nobody = "nobody",
  player1 = "Player1",
  player2 = "Player2"
}

export interface props {
  board: label[][];
  player1: player;
  player2: player;
  turn: number;
  winner: player | false;
}

export interface controlProps extends props {
  onPlayerChange: (player1: player, player2: player) => void;
}

export interface colorControlProps extends controlProps {
  player: player;
}

export interface boardProps extends props {
  onBoardChange: (board: label[][], turn: number) => void;
  onWin: (winner: player) => void;
}

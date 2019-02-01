export interface player {
  computer: boolean;
  color: string;
  colorOptions: string[];
  label: label;
  searchOptions?: searchOptions;
}

export interface searchOptions {
  depth: number;
  evaluationFunction: (
    board: label[][],
    me: player,
    opponent: player
  ) => number;
}

export enum label {
  nobody = "nobody",
  player1 = "Player1",
  player2 = "Player2"
}

export interface coordinates {
  row: number;
  column: number;
}

export interface props {
  board: label[][];
  player1: player;
  player2: player;
  turn: number;
  started: boolean;
  winner: player | false;
}

export interface controlProps extends props {
  onPlayerChange: (player1: player, player2: player) => void;
  onGameStart: () => void;
  onGameReset: () => void;
}

export interface individualControlProps extends controlProps {
  player: player;
}

export interface boardProps extends props {
  onBoardChange: (board: label[][], turn: number, callback: () => void) => void;
  onWin: (winner: player, board: label[][]) => void;
}

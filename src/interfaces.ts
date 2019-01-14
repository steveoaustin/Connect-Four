import {
  simpleEvaluationFunction,
  complexEvaluationFunction
} from "./intelligence";

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
  boardProps: {
    board: label[][];
    sectionSize: number;
    player1: player;
    player2: player;
  };
}

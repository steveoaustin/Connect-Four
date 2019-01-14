import {
  simpleEvaluationFunction,
  complexEvaluationFunction
} from "./Intelligence";

export interface player {
  computer: boolean;
  color: string;
  searchOptions?: searchOptions;
}

export interface searchOptions {
  depth: number;
  evaluationFunction: (board: label[][]) => number;
}

export const easy: searchOptions = {
  depth: 1,
  evaluationFunction: simpleEvaluationFunction
};
export const medium: searchOptions = {
  depth: 3,
  evaluationFunction: simpleEvaluationFunction
};
export const hard: searchOptions = {
  depth: 5,
  evaluationFunction: complexEvaluationFunction
};

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

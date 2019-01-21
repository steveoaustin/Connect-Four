import { searchOptions, label, player } from "./interfaces";
import {
  simpleEvaluationFunction,
  complexEvaluationFunction
} from "./intelligence";

export const gameWidth = 7;
export const gameHeight = 6;
export const winSequence = 4;
export const topInterfaceHeight = 1;
export const sectionSize = 70;
export const sectionSpacing = 7;
export const pieceSize = sectionSize - sectionSpacing;
export const margin = 5;

export const backgroundColor = "white";
export const colorChoices = [
  "red",
  "orange",
  "green",
  "blue",
  "aqua",
  "purple",
  "deepPink",
  "black"
];

export const depthOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
export const defaultDepth = "7";

export const evalFunctionOptions = ["simple", "complex"];
export const defaultEval = "simple";
export const evalFunctionDict: {
  [name: string]: (board: label[][], me: player, opponent: player) => number;
} = {
  simple: simpleEvaluationFunction,
  complex: complexEvaluationFunction
};

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

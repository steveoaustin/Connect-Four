import { searchOptions } from "./interfaces";
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

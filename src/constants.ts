import { searchOptions } from "./interfaces";
import {
  simpleEvaluationFunction,
  complexEvaluationFunction
} from "./intelligence";

export const gameWidth = 7;
export const gameHeight = 6;
export const topInterfaceHeight = 1;
export const defaultSectionSize = 50;
export const sectionSpacing = 5;
export const pieceSize = defaultSectionSize - sectionSpacing;

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

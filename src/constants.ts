import { searchOptions, label, player } from "./interfaces";
import { Simple, Complex } from "./intelligence";

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

export const depthOptions = ["1", "2", "3", "4", "5", "6", "7"];
export const defaultDepth = "6";

export const evalFunctionOptions = ["Simple", "Complex"];
export const defaultEval = "Complex";
export const evalFunctionDict: {
  [name: string]: (board: label[][], me: player, opponent: player) => number;
} = { Simple: Simple, Complex: Complex };

export const sequencePower = 3;

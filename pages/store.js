import { atom } from "jotai";

const pieces = [];
const globalPieces = atom(pieces);

const artPiecesInfo = atom([]);

export default globalPieces;

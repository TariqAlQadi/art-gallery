import { atom } from "jotai";

const pieces = [];
const globalPieces = atom(pieces);

export const globalArtPiecesFavourites = atom([]);

export default globalPieces;

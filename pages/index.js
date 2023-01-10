import Spotlight from "../components/Spotlight";
import { useAtom } from "jotai";
import globalPieces from "./store";

export default function SpotlightPage() {
  const [pieces] = useAtom(globalPieces);
  console.log(pieces);
  //get random piece
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomPiece = getRandomElement(pieces);
  console.log(randomPiece);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight piece={randomPiece} />
    </>
  );
}

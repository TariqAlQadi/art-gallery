import { useAtom } from "jotai";
import ArtPieces from "../../components/ArtPieces";
import globalPieces from "../store";

export default function DetailsPages() {
  const [pieces] = useAtom(globalPieces);

  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}

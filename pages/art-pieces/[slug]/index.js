import ArtPieceDetails from "../../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import globalPieces from "../../store";
import { useAtom } from "jotai";

export default function DetailsPages() {
  const [pieces] = useAtom(globalPieces);
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <h1>Details:</h1>
      <ArtPieceDetails
        imageSource={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
        width={currentPiece.dimensions.width / 3}
        height={currentPiece.dimensions.height / 3}
      />
    </>
  );
}

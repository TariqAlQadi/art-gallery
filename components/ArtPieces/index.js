import ArtPiecePreview from "../ArtPiecePreview";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section>
      <ul>
        {pieces.map((piece) => {
          return (
            <ArtPiecePreview
              key={piece.slug}
              title={piece.name}
              artist={piece.artist}
              imageSource={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              slug={piece.slug}
            />
          );
        })}
      </ul>
    </section>
  );
}

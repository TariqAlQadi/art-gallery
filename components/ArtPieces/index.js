import ArtPiecePreview from "../ArtPiecePreview";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ul>
      {pieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <Link href={`/art-pieces/${artPiece.slug}`}>
              <ArtPiecePreview
                image={artPiece.imageSource}
                title={artPiece.name}
                artist={artPiece.artist}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <ArtPiecePreview
              image={artPiece.imageSource}
              title={artPiece.name}
              artist={artPiece.artist}
            />
          </li>
        );
      })}
    </ul>
  );
}

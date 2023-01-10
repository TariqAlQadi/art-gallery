import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
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

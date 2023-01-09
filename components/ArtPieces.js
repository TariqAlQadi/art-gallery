export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <h2>{artPiece.name}</h2>
            <span>{artPiece.artist}</span>
            <img src={artPiece.imageSource} alt="bild"></img>
          </li>
        );
      })}
    </ul>
  );
}

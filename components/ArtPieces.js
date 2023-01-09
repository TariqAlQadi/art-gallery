import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <ArtPiecePreview image={artPiece.imageSource} title={artPiece.name} artist={artPiece.artist}/>
          </li>
        );
      })}
    </ul>
  );
}


/*
<h2>{artPiece.name}</h2>
            <span>{artPiece.artist}</span>
            <img src={artPiece.imageSource} alt={artPiece.name}></img>
*/
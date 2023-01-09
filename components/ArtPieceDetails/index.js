export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <ul>
      <li>{image}</li>
      <li>{title}</li>
      <li>{artist}</li>
      <li>{year}</li>
      <li>{genre}</li>
    </ul>
  );
}

import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <span>{artist}</span>
      <img src={image} alt={title} height={200} width={200} />
    </>
  );
}

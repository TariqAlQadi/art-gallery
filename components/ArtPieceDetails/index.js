import Image from "next/image";
import FavouriteButton from "../FavouriteButton";

export default function ArtPieceDetails({
  imageSource,
  title,
  artist,
  year,
  genre,
  width,
  height,
}) {
  return (
    <section>
      <Image
        src={imageSource}
        width={width}
        height={height}
        alt={title}
      ></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{genre}</p>
      <p>{year}</p>
      <FavouriteButton isFavorite onToggleFavorite />
    </section>
  );
}

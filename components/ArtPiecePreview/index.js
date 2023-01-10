import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton";

export default function ArtPiecePreview({
  title,
  artist,
  imageSource,
  width,
  height,
  slug,
}) {
  return (
    <li>
      <Link href={`/art-pieces/${slug}`}>
        <p>{title}</p>
        <p>{artist}</p>
        <Image
          src={imageSource}
          alt={title}
          height={height / 5}
          width={width / 5}
        />
      </Link>
      <FavouriteButton isFavorite onToggleFavorite />
    </li>
  );
}

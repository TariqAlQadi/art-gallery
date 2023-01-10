import Image from "next/image";
import FavouriteButton from "../FavouriteButton";
import Link from "next/link";

export default function Spotlight({ piece }) {
  return (
    <section>
      <Link href={`./art-pieces/${piece.slug}`}>
        <p>{piece.artist}</p>
        <Image
          src={piece.imageSource}
          width={piece.dimensions.width / 3}
          height={piece.dimensions.height / 3}
          alt={piece.name}
        />
      </Link>
      <FavouriteButton isFavorite onToggleFavorite />
    </section>
  );
}

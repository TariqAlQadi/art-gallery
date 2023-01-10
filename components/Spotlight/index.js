import Image from "next/image";

export default function Spotlight({ piece }) {
  return (
    <section>
      <p>{piece.artist}</p>
      <Image
        src={piece.imageSource}
        width={piece.dimensions.width / 3}
        height={piece.dimensions.height / 3}
        alt={piece.name}
      />
    </section>
  );
}

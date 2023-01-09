import Spotlight from "../components/Spotlight";
import useSWR from "swr";
import Link from "next/link";

export default function spotlight() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomPiece = getRandomElement(data);

  console.log(randomPiece);

  return (
    <>
      <Link href="/">Go Back To Homepage</Link>
      <br />
      <Link href="/list">Switch To List</Link>
      <Spotlight
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
      />
    </>
  );
}

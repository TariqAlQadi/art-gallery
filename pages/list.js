import ArtPieces from "../components/ArtPieces";
import useSWR from "swr";
import Link from "next/link";

export default function List() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Link href="/">Go Back To Homepage</Link>
      <br />
      <Link href="/spotlight">Switch To Spotlight</Link>
      <ArtPieces pieces={data} />
    </>
  );
}

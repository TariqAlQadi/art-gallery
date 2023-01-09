import ArtPieces from "../components/Artpieces/ArtPieces";
import useSWR from "swr";

export default function List() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}

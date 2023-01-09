import useSWR from "swr";
import ArtPieces from "../components/Artpieces/ArtPieces";

export default function HomePage() {
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

import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <ul>
      {data.map((artPiece) => {
        return <li key={artPiece.slug}>{artPiece.artist}</li>;
      })}
    </ul>
  );
}

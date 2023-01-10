import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useAtom } from "jotai";
import globalPieces, { globalArtPiecesFavourites } from "./store";
import Layout from "../components/Layout";

//fetcher function
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

//App
export default function App({ Component, pageProps }) {
  //global states
  const [pieces, setPieces] = useAtom(globalPieces);
  const [artPiecesinfo, setArtPiecesInfo] = useAtom(globalArtPiecesFavourites);

  //fetch
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //favourite info
  const dataInfo = data.map((piece) => {
    return { slug: piece.slug, isFavourite: false };
  });
  console.log(dataInfo);

  //setter functions
  setPieces(data);
  setArtPiecesInfo();

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

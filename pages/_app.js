import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useAtom } from "jotai";
import globalPieces from "./store";
import Layout from "../components/Layout";

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

export default function App({ Component, pageProps }) {
  const [pieces, setPieces] = useAtom(globalPieces);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  setPieces(data);

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

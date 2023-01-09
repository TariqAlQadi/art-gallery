import useSWR from "swr";

const { data, error, isLoading } = useSWR(
  "https://example-apis.vercel.app/api/art"
);

export default function Spotlight() {}

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>The Art Gallery</h1>
      <ul>
        <li>
          <Link href="/list">List View</Link>
        </li>
        <li>
          <Link href="/spotlight">Spotlight</Link>
        </li>
      </ul>
    </>
  );
}

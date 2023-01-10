import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/art-pieces">List View</Link>
      <br />
      <Link href="/">Spotlight</Link>
    </nav>
  );
}

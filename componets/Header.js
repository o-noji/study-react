import Link from "next/Link";

export function Header() {
  return (
    <header>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}

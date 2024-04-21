import Link from "next/link";

export default function Navbar() {
  return (
    <header className="dark:bg-black text-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Akash Mullath Valappil
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

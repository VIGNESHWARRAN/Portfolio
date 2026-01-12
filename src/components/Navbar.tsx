import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <span className="text-xl font-semibold text-accent">
        Vigneshwarran
      </span>
      <div className="space-x-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/ai-ml">AI & ML</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

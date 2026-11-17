import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-10">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-sky-400">
            Franzen Osera
          </Link>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="text-sky-400">
              Home
            </Link>
            <Link href="/About" className="hover:text-sky-400 transition">
              About
            </Link>
            <Link href="/Education" className="hover:text-sky-400 transition">
              Education
            </Link>
            <Link href="/Hobbies" className="hover:text-sky-400 transition">
              Hobbies
            </Link>
            <Link href="/Contact" className="hover:text-sky-400 transition">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 flex flex-col justify-center">
        <p className="text-sky-400 font-medium mb-3">Kumusta! Ako si</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Franzen Osera
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Isang student developer na bumubuo ng moderno at mabilis na web
          applications gamit ang Next.js, TypeScript, at Tailwind CSS.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/About"
            className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition"
          >
            Tungkol sa Akin
          </Link>
          <Link
            href="/Contact"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-400 text-slate-200 font-semibold transition"
          >
            Makipag-ugnayan
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 Franzen Osera. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Osera Portfolio Web App',
    description:
      'Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS featuring responsive layouts and modern UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: '/about',
  },
  {
    title: 'Student Information & Portal System',
    description:
      'A web-based academic management and student dashboard designed to streamline school records and announcements.',
    tags: ['React', 'JavaScript', 'REST API'],
    href: '/education',
  },
  {
    title: 'Interactive Task & Schedule Tracker',
    description:
      'Clean productivity app for organizing daily coursework, coding milestones, and project deadlines.',
    tags: ['Frontend', 'UI/UX', 'State Management'],
    href: '/contact',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition"
          >
            Franzen<span className="text-indigo-400">.dev</span>
          </Link>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-400 transition">
              About
            </Link>
            <Link href="/education" className="hover:text-indigo-400 transition">
              Education
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24">
        {/* Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Projects &amp; Collaborations
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-indigo-400">Franzen Osera</span>.
            <br />
            <span className="text-slate-300 text-3xl sm:text-5xl font-bold">
              Building clean &amp; modern web experiences.
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Isang IT student at Frontend Web Developer mula sa Naga City, Philippines. 
            Gumagawa ako ng responsive, user-friendly, at mabilis na web applications 
            gamit ang React, Next.js, at TypeScript.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium rounded-xl transition"
            >
              More About Me
            </Link>
          </div>
        </section>

        {/* Quick Overview Cards (Navigation Preview) */}
        <section className="grid sm:grid-cols-3 gap-6">
          <Link
            href="/about"
            className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 space-y-2 transition"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              01 / Profile
            </p>
            <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
              About Me →
            </h2>
            <p className="text-sm text-slate-400">
              Alamin ang aking background, tech stack, at kung paano ako nagsimula sa web development.
            </p>
          </Link>

          <Link
            href="/education"
            className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 space-y-2 transition"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              02 / Academics
            </p>
            <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
              Education →
            </h2>
            <p className="text-sm text-slate-400">
              Tingnan ang aking academic timeline sa Naga College Foundation at mga certifications.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 space-y-2 transition"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              03 / Connect
            </p>
            <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
              Contact →
            </h2>
            <p className="text-sm text-slate-400">
              May project idea o tanong? Magpadala ng direkta at mabilis na mensahe.
            </p>
          </Link>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-6">
          <div className="flex items-end justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Selected Work
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sm text-indigo-400 hover:underline hidden sm:inline"
            >
              View Skills &amp; Stack →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-slate-700 transition"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-xs text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Franzen Osera. Built with Next.js &amp; Tailwind CSS.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-300 transition">
              About
            </Link>
            <Link href="/education" className="hover:text-slate-300 transition">
              Education
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

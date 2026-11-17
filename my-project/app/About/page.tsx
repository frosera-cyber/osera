import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero / Header Section */}
        <section className="space-y-4 border-b border-slate-800 pb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Hi, I&apos;m <span className="text-indigo-400">Franzen Osera</span>.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Isang passionate developer at tech enthusiast na nakatira sa Naga City, Philippines. 
            Mahilig akong bumuo ng malilinis, mabilis, at kapaki-pakinabang na web applications 
            gamit ang modernong web technologies.
          </p>
        </section>

        {/* Background & Story */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">My Story</h2>
            <p className="text-slate-300 leading-relaxed">
              Nagsimula ang interes ko sa programming dahil sa kagustuhang malaman kung paano 
              gumagana ang mga website at application sa likod ng screen. Mula sa simpleng 
              HTML at CSS, lumawak ang kaalaman ko sa pagbuo ng full-stack projects.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Sa bawat project na ginagawa ko, layunin kong gawing simple ang mga kumplikadong 
              problema at magbigay ng magandang user experience.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Details</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Name:</span>
                <span className="font-medium text-white">Franzen Osera</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Location:</span>
                <span className="font-medium text-white">Naga City, Bicol, PH</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Focus:</span>
                <span className="font-medium text-white">Frontend & Web Development</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-medium text-emerald-400">Open for Projects & Collab</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills & Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Tech Stack & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'JavaScript (ES6+)',
              'Node.js',
              'Git & GitHub',
              'REST APIs',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-medium text-indigo-300 hover:border-indigo-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact / Call to Action */}
        <section className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">Let&apos;s Connect!</h2>
            <p className="text-slate-300 text-sm max-w-md">
              May project idea ka ba o gusto mong makipag-collaborate? Mag-send lang ng email.
            </p>
          </div>
          <a
            href="mailto:emailfrosera@gbox.ncf.edu.ph"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Email Me
          </a>
        </section>
      </div>
    </main>
  );
}

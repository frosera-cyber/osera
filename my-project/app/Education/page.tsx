interface EducationItem {
  level: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

const educationHistory: EducationItem[] = [
  {
    level: 'Tertiary / College',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    school: 'Naga College Foundation, Inc.',
    location: 'Naga City, Camarines Sur',
    period: '2022 – Present',
    status: 'Current',
    highlights: [
      'Focused on Web Development, Software Engineering, and Database Management',
      'Active participant in IT hackathons, coding workshops, and student tech organizations',
      'Built full-stack academic projects using React, Next.js, and TypeScript',
    ],
  },
  {
    level: 'Senior High School',
    degree: 'Technical-Vocational-Livelihood (TVL) – ICT Strand',
    school: 'Naga City Senior High School',
    location: 'Naga City, Camarines Sur',
    period: '2020 – 2022',
    status: 'Graduated with Honors',
    highlights: [
      'Learned foundational programming, web design (HTML, CSS, JavaScript), and computer systems servicing',
      'Developed a capstone web-based school information system',
    ],
  },
  {
    level: 'Junior High School',
    degree: 'Secondary Education',
    school: 'Naga City High School',
    location: 'Naga City, Camarines Sur',
    period: '2016 – 2020',
    status: 'Completed',
    highlights: [
      'Consistent academic performer with strong interest in Mathematics and Computer Studies',
    ],
  },
];

const certifications: CertificationItem[] = [
  {
    title: 'Responsive Web Design & Modern JavaScript',
    issuer: 'freeCodeCamp',
    year: '2024',
  },
  {
    title: 'Frontend Development with React & Next.js',
    issuer: 'Online Tech Bootcamp',
    year: '2025',
  },
  {
    title: 'Git & GitHub Version Control Essentials',
    issuer: 'GitHub Campus / Workshop',
    year: '2025',
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header Section */}
        <section className="space-y-4 border-b border-slate-800 pb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Academic Background
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            My <span className="text-indigo-400">Education</span>.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Ang aking academic journey, coursework, at mga trainings na humubog sa 
            aking kaalaman sa software at web development.
          </p>
        </section>

        {/* Education Timeline */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">Academic Timeline</h2>

          <div className="relative border-l border-slate-800 ml-3 space-y-10">
            {educationHistory.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot */}
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      {item.level}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/20 w-fit">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <p className="text-slate-300 font-medium">
                      {item.school}{' '}
                      <span className="text-slate-500 font-normal">
                        • {item.location}
                      </span>
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Status</span>
                    <span className="font-medium text-emerald-400">{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Trainings */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Certifications & Workshops
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 transition hover:border-indigo-500/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {cert.year}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

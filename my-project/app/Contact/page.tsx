'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dito mo puwedeng ikonekta ang API route, EmailJS, o Formspree
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="space-y-4 border-b border-slate-800 pb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Get in <span className="text-indigo-400">Touch</span>.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            May tanong ka ba, project proposal, o gusto mong makipag-collaborate? 
            Mag-iwan ng mensahe sa ibaba o mag-email nang direkta.
          </p>
        </section>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Details Sidebar */}
          <aside className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-xl font-semibold text-white">Contact Info</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400">Email</p>
                <a
                  href="mailto:emailfrosera@gbox.ncf.edu.ph"
                  className="text-indigo-400 hover:underline font-medium break-all"
                >
                  emailfrosera@gbox.ncf.edu.ph
                </a>
              </div>

              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white font-medium">Naga City, Bicol, Philippines</p>
              </div>

              <div>
                <p className="text-slate-400">Availability</p>
                <p className="text-emerald-400 font-medium">
                  Open for Freelance & Collaborations
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Socials
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 hover:border-indigo-500 hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 hover:border-indigo-500 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="md:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400">
                  <span className="text-2xl" aria-hidden="true">
                    ✓
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Message sent!
                </h2>
                <p className="text-slate-400">
                  Salamat sa pag-reach out. Makikipag-ugnayan ako sa iyo sa
                  lalong madaling panahon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

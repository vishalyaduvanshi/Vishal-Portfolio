"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Globe from "@/app/components/Globe";

const email = "snyadav.vishal70@gmail.com";
const phone = "+91 7071712176";
const linkedin = "https://www.linkedin.com/in/vishal-yadav-892113233/";
const github = "https://github.com/vishalyaduvanshi";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const senderEmail = form.email.trim();
    const subject = form.subject.trim() || `Portfolio enquiry from ${name}`;
    const message = form.message.trim();

    if (!name || !senderEmail || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const body = `Name: ${name}\nReply email: ${senderEmail}\n\n${message}`;
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen bg-[#050711] text-white">
      <section className="border-b border-white/10 px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-cyan-300">Get in touch</p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s start a{" "}
            <span className="text-violet-300">conversation.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Have a project in mind or an opportunity to discuss? I&apos;d be
            happy to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
        {/* LEFT: CONTACT DETAILS AND FORM */}
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold">Contact information</h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
            I&apos;m open to development opportunities, collaborations, and
            projects that solve real problems.
          </p>

          <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
            <a href={`mailto:${email}`} className="group flex items-center gap-4 py-4">
              <Mail size={20} className="shrink-0 text-violet-300" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">Email</span>
                <span className="mt-1 block break-all text-sm text-white/50">
                  {email}
                </span>
              </span>
              <ArrowUpRight size={17} className="shrink-0 text-white/35 transition group-hover:text-violet-300" />
            </a>

            <a href={`tel:${phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 py-4">
              <Phone size={20} className="shrink-0 text-cyan-300" />
              <span className="flex-1">
                <span className="block text-sm font-semibold">Phone</span>
                <span className="mt-1 block text-sm text-white/50">{phone}</span>
              </span>
              <ArrowUpRight size={17} className="shrink-0 text-white/35 transition group-hover:text-cyan-300" />
            </a>

            <div className="flex items-center gap-4 py-4">
              <MapPin size={20} className="shrink-0 text-violet-300" />
              <span>
                <span className="block text-sm font-semibold">Location</span>
                <span className="mt-1 block text-sm text-white/50">India</span>
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-5">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-white/65 transition hover:text-white">
              <FaGithub size={22} />
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-white/65 transition hover:text-cyan-300">
              <FaLinkedinIn size={22} />
            </a>

            <Link href="/projects" className="ml-auto inline-flex items-center gap-1.5 text-sm text-violet-300 transition hover:text-white">
              View Projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-white/50">
              Tell me about your project or opportunity.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/80">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-[#090c15] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-violet-400/70"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/80">
                  Your email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-[#090c15] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-violet-400/70"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-white/80">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-lg border border-white/10 bg-[#090c15] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-violet-400/70"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/80">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  className="min-h-[170px] w-full resize-y rounded-lg border border-white/10 bg-[#090c15] px-4 py-3 text-sm leading-6 outline-none placeholder:text-white/30 focus:border-violet-400/70"
                />
              </div>

              {error && <p role="alert" className="text-sm text-red-300">{error}</p>}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 text-sm font-semibold transition hover:brightness-110"
              >
                <Send size={16} />
                Send Message
                <ArrowUpRight size={16} />
              </button>

              <p className="text-xs leading-5 text-white/40">
                Your default email app opens with the message ready to send.
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT: LARGE GLOBE */}
        <div className="min-w-0 lg:sticky lg:top-24">
          <div className="mb-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Connected globally
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              A world of possibilities.
            </h2>
            <p className="mt-3 text-sm text-white/50">
              Building connections beyond boundaries.
            </p>
          </div>

          <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">
            <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/[0.07] blur-3xl" />
            <div className="relative w-full max-w-[680px]">
              <Globe />
            </div>
          </div>

          <p className="text-center text-sm text-white/45">
            Open to opportunities and meaningful collaborations.
          </p>
        </div>
      </section>
    </main>
  );
}
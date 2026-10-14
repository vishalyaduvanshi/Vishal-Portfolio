"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Heart,
  ArrowUp,
  Code2,
} from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "GitHub Gallery", href: "/github" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const email = "snyadav.vishal70@gmail.com";
const github = "https://github.com/vishalyaduvanshi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#030711] text-white">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Vishal Yadav home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                <Code2 size={23} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Vishal<span className="text-blue-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              I build modern web applications with a focus on useful features,
              clean code, and thoughtful user experiences.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-5 inline-flex items-center gap-2 break-all text-sm text-slate-300 transition hover:text-blue-400"
            >
              <Mail size={17} className="shrink-0 text-blue-400" />
              {email}
              <ArrowUpRight size={15} className="shrink-0" />
            </a>

            <div className="mt-5 flex gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.9 2.02 3.25 1.53.1-.73.4-1.23.7-1.51-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.66.12 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.09 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-yadav-892113233/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 9h3.563v11.452H3.555V9ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Page links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 text-lg font-semibold">
              Have a project in mind?
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Tell me what you&apos;re working on. I&apos;m happy to discuss
              project ideas, development roles, and collaborations.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {CURRENT_YEAR} Vishal Yadav. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Made with <Heart size={13} className="fill-red-400 text-red-400" /> and care.
          </p>

          <Link
            href="/"
            aria-label="Back to home"
            className="inline-flex h-9 w-9 items-center justify-center self-start rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/40 hover:text-white sm:self-auto"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
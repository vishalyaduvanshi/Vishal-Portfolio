
"use client";

import { ArrowUpRight, Mail, ArrowRight } from "lucide-react";

const contacts = [
  {
    title: "Email",
    subtitle: "vishal@example.com",
    href: "mailto:vishal@example.com",
    type: "email",
  },
  {
    title: "LinkedIn",
    subtitle: "Connect with me",
    href: "https://www.linkedin.com/",
    type: "linkedin",
  },
  {
    title: "GitHub",
    subtitle: "View my projects",
    href: "https://github.com/vishalyaduvanshi",
    type: "github",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return <Mail size={21} />;
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 9h3.563v11.452H3.555V9ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.7.08-.7 1.12.08 1.7 1.14 1.7 1.14 1 .1.76 2.1 3.72 1.6.1-.75.4-1.25.7-1.54-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.2 1.15-2.98-.12-.28-.5-1.42.1-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.76 1.14 2.98 0 4.27-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden border-y border-blue-400/20 bg-[#030711] text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/earth.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#030711]/35" />

      {/* Main container */}
      <div className="mx-auto grid min-h-[135px] w-full max-w-[1450px] grid-cols-1 items-center gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[1.05fr_1.55fr] lg:gap-6 lg:px-0 lg:py-6">
        {/* Left: Heading and description */}
        <div className="relative z-10 min-w-0">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Get in Touch
          </div>

          <h2 className="text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl">
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Have a project in mind or want to collaborate?
            <br />
            I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        {/* Right: Contact cards */}
        <div className="relative z-10 grid min-w-0 grid-cols-1 items-stretch gap-2.5 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type === "email" ? undefined : "_blank"}
              rel={
                contact.type === "email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-[#071224]/75 px-3 py-3 transition duration-300 hover:border-blue-300/40 hover:bg-[#0B1830]/90"
            >
              <span
                className={`shrink-0 ${
                  contact.type === "linkedin"
                    ? "text-sky-400"
                    : contact.type === "email"
                      ? "text-violet-300"
                      : "text-white"
                }`}
              >
                <ContactIcon type={contact.type} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1 text-sm font-bold text-white sm:text-base">
                  {contact.title}
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

                <span className="mt-1 block truncate text-xs leading-5 text-slate-400 sm:text-sm">
                  {contact.subtitle}
                </span>
              </span>
            </a>
          ))}

          {/* Send message button */}
          <a
            href="mailto:vishal@example.com"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition hover:brightness-110 sm:col-span-3"
          >
            Send a Message
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-indigo-600">
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

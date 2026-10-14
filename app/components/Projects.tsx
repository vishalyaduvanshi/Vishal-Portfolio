
"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    name: "NaukriX",
    category: "Job Portal",
    description:
      "A modern job portal featuring job discovery, applicant management, recruiter tools and admin dashboards.",
    image: "/NuakriX.png",
    accent: "#3984FF",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demo: "#",
    code: "https://github.com/vishalyaduvanshi",
  },
  {
    name: "PhoolPaudha",
    category: "E-commerce",
    description:
      "A premium plant shopping experience with product discovery, curated categories and a responsive storefront.",
    image: "/PhoolPaudha.png",
    accent: "#4ADE80",
    tags: ["React", "Next.js", "E-commerce"],
    demo: "#",
    code: "https://github.com/vishalyaduvanshi",
  },
  {
    name: "Pay-Zone",
    category: "Gift Cards",
    description:
      "A digital gift card marketplace designed for brand discovery, exclusive deals and a smooth checkout experience.",
    image: "/payzone.png",
    accent: "#A78BFA",
    tags: ["Next.js", "React", "API"],
    demo: "#",
    code: "https://github.com/vishalyaduvanshi",
  },
  {
    name: "BookOurBus",
    category: "Travel",
    description:
      "A responsive bus booking platform with route discovery, ticket booking and a user-friendly travel experience.",
    image: "/bookourbus.png",
    accent: "#38BDF8",
    tags: ["Next.js", "React", "UI/UX"],
    demo: "#",
    code: "https://github.com/vishalyaduvanshi",
  },
];

const technologies = [
  { name: "Next.js", symbol: "N", color: "#FFFFFF" },
  { name: "React", symbol: "⚛", color: "#61DAFB" },
  { name: "TypeScript", symbol: "TS", color: "#60A5FA" },
  { name: "Python", symbol: "Py", color: "#FACC15" },
  { name: "SQL", symbol: "▤", color: "#38BDF8" },
  { name: "Power BI", symbol: "▥", color: "#FACC15" },
  { name: "Tailwind CSS", symbol: "≈", color: "#38BDF8" },
  { name: "MongoDB", symbol: "◈", color: "#4ADE80" },
  { name: "Git", symbol: "⑂", color: "#FB923C" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-y border-blue-300/10 bg-[#030711] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Premium blue atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute right-[-100px] top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1450px]">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              <Sparkles size={15} />
              Featured Work
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projects That Make
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-400 bg-clip-text text-transparent">
                an Impact.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-400">
              A selection of digital products built with modern
              technologies, thoughtful design and a focus on solving
              real-world problems.
            </p>
          </div>

          <a
            href="https://github.com/vishalyaduvanshi"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/[0.08] px-5 py-3 text-sm font-semibold text-blue-100 transition duration-300 hover:border-blue-300/60 hover:bg-blue-500/15"
          >
            View GitHub
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Technology strip */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-2 backdrop-blur-xl transition hover:border-blue-300/30 hover:bg-blue-400/[0.07]"
            >
              <span
                className="text-sm font-bold"
                style={{ color: tech.color }}
              >
                {tech.symbol}
              </span>
              <span className="text-sm font-medium text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.10] bg-[#081121]/85 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300/35 hover:shadow-[0_20px_55px_rgba(37,99,235,0.13)]"
            >
              {/* Actual project image */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-[#0A1325]">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030711]/45 via-transparent to-[#030711]/10" />

                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#030711]/75 px-2.5 py-1.5 backdrop-blur-xl">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  <span className="text-[10px] font-semibold tracking-wide text-white">
                    FEATURED PROJECT
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-[#030711]/75 p-2 text-white backdrop-blur-xl transition group-hover:border-blue-300/40">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Card content */}
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {project.name}
                  </h3>

                  <span
                    className="shrink-0 rounded-full border px-2 py-1 text-[10px] font-medium"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}40`,
                      backgroundColor: `${project.accent}10`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="min-h-[65px] text-sm leading-[1.75] text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={project.demo}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-400/30 bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-2.5 text-sm font-semibold text-white transition hover:brightness-125"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] px-2 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-300/30 hover:bg-blue-400/[0.07]"
                  >
                    <Code2 size={15} />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Subtle blue accent */}
              <div
                className="pointer-events-none absolute bottom-0 left-[15%] h-px w-[70%] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }}
              />
            </article>
          ))}
        </div>

        {/* Bottom signature */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/[0.08] pt-7 text-center sm:flex-row">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Designed with purpose
          </div>
          <span className="hidden text-slate-700 sm:block">/</span>
          <span className="text-xs tracking-wide text-slate-500">
            Built with modern technologies
          </span>
        </div>
      </div>
    </section>
  );
}

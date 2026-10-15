"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BookOurBus",
    category: "Travel & Bus Booking",
    image: "/bookourbus.png",
    description:
      "A bus booking platform concept focused on responsive design, smooth navigation, and a convenient booking experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/vishalyaduvanshi",
  },
  {
    title: "Ranapay- Giftcard",
    category: "Gift Card Marketplace",
    image: "/ranapay.png",
    description:
      "A premium digital gift card marketplace with brand discovery, product browsing, and a modern shopping experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/vishalyaduvanshi",
  },
  {
    title: "PhoolPaudha",
    category: "Plant Store",
    image: "/PhoolPaudha.png",
    description:
      "An online plant store interface with product discovery, category browsing, and responsive product cards.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/vishalyaduvanshi",
  },
  {
    title: "NaukriX",
    category: "Job Portal Admin",
    image: "/NuakriX.png",
    description:
      "A job portal administration interface for managing job listings, applications, interviews, and team members.",
    tech: ["Next.js", "TypeScript", "API Integration"],
    github: "https://github.com/vishalyaduvanshi",
  },
  {
    title: "Amazon Sales Report",
    category: "Data Analytics",
    image: "/earth.png",
    description:
      "An Amazon sales reporting project focused on sales data, analysis, and presenting business insights.",
    tech: ["Python", "Power BI", "Data Analysis"],
    github: "https://github.com/vishalyaduvanshi/amazon-s-sales-report",
  },
  {
    title: "DataAnalysisProjects",
    category: "Data Analytics",
    image: "/earth.png",
    description:
      "A collection of data analysis projects covering data preparation, exploration, analysis, and visualization.",
    tech: ["Python", "Pandas", "SQL", "Power BI"],
    github: "https://github.com/vishalyaduvanshi/DataAnalysisProjects",
  },
  {
    title: "Titanic Model",
    category: "Machine Learning",
    image: "/hero.png",
    description:
      "A Titanic dataset machine learning project exploring passenger data and survival prediction.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning"],
    github: "https://github.com/vishalyaduvanshi/titanic_model",
  },
  {
    title: "Note App",
    category: "Web Application",
    image: "/about.png",
    description:
      "A notes application repository. Explore the source code to see its implemented features and functionality.",
    tech: ["JavaScript", "Web Development"],
    github: "https://github.com/vishalyaduvanshi/note-app",
  },
  {
    title: "GitHub Profile",
    category: "Developer Profile",
    image: "/about.png",
    description:
      "Explore my public repositories, source code, development experiments, and contributions.",
    tech: ["Git", "GitHub", "Open Source"],
    github: "https://github.com/vishalyaduvanshi",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Background image: lightly blurred on mobile, sharp on desktop */}
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/project.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center blur-[2px] sm:blur-none"
          />
        </div>

        {/* Consistent contrast for readable text */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#030711]/65 sm:bg-[#030711]/55" />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#030711]/85 via-[#030711]/65 to-[#030711]/40 sm:from-[#030711]/85 sm:via-[#030711]/55 sm:to-[#030711]/20" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#030711]/70 px-3.5 py-2 text-sm font-medium text-white">
            <Layers3 size={16} className="text-violet-300" />
            My Portfolio
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ideas transformed into
            <span className="block text-violet-200">
              digital experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
            Explore my web applications, development projects, and data
            analytics work. Each repository provides an opportunity to
            explore my code and technical learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 text-sm text-white">
            {[
              "Web Development",
              "Full-Stack",
              "Data Analytics",
              "Machine Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/20 bg-[#030711]/65 px-3.5 py-2"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/vishalyaduvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-500"
          >
            <FaGithub size={18} />
            Explore My GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Selected Work
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Projects &amp; Repositories
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Explore the work and source code.
            </p>
          </div>

          <span className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70">
            {projects.length} Repositories
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080d1a] transition-colors duration-200 hover:border-violet-300/35"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#0b1222]"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                <span className="absolute left-4 top-4 rounded-lg border border-white/15 bg-[#030711]/90 px-3 py-1.5 text-xs font-medium text-white">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#030711]/90 text-white transition-colors group-hover:border-violet-300/50">
                  <FaGithub size={19} />
                </span>
              </a>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-violet-300">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-white/50 transition-colors group-hover:text-violet-300"
                  />
                </div>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/70">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-xs text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-violet-300/50 hover:bg-violet-500/[0.08]"
                  >
                    <FaGithub size={17} />
                    View Repository
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-[#080d1a] p-7 sm:p-10">
          <p className="text-sm font-medium text-violet-300">
            Let&apos;s connect
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            I&apos;m open to development opportunities, collaborations,
            and building useful digital products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#080b16] transition-colors hover:bg-violet-100"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://github.com/vishalyaduvanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-violet-300/40"
            >
              <FaGithub size={17} />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  BarChart3,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive and accessible user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    description: "Working with application logic, APIs, and structured data.",
    skills: ["Python", "SQL", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transforming raw data into useful insights and reports.",
    skills: [
      "Power BI",
      "MS Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Tools that support development and analysis workflows.",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "npm",
    ],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    description:
      "Foundational tools for data preparation and predictive modeling.",
    skills: [
      "Scikit-learn",
      "Statistical Analysis",
      "Feature Preparation",
      "Model Evaluation",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden border-b border-white/10 sm:min-h-[500px] lg:min-h-[550px]">
        <Image
          src="/skill.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-[1px] sm:blur-none"
        />

        {/* Natural dark overlay for readable text */}
        <div className="absolute inset-0 bg-[#050914]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050914]/95 via-[#050914]/75 to-[#050914]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 via-transparent to-[#080b12]/15" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Code2 size={16} />
              Technical Expertise
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Skills that turn
              <span className="mt-2 block text-blue-300">
                ideas into reality.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              My technical toolkit covers frontend development, backend
              fundamentals, databases, and data analytics. I continue to
              strengthen these skills through practical projects and
              continuous learning.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Web Development",
                "Data Analytics",
                "Machine Learning",
                "Tools & Platforms",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-black/25 px-3 py-2 text-xs text-white/90 backdrop-blur-sm sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#101827] transition hover:bg-blue-100"
            >
              Explore My Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            What I Work With
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            My Technical Skills
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
            Technologies and tools I use to build applications, work with
            data, and solve practical problems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#0d121d] p-6 transition-colors duration-300 hover:border-blue-300/40 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-300">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-blue-300/80">
                  CATEGORY 0{index + 1}
                </p>

                <h2 className="mt-2 text-xl font-bold tracking-tight">
                  {group.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/80 transition-colors hover:border-blue-300/30 hover:bg-blue-400/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Learning section */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0d121d] p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                <BrainCircuit size={21} />
              </div>
              <h2 className="text-2xl font-bold">Always learning</h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              I believe the best way to improve is to keep building, solve
              real problems, learn from feedback, and strengthen the
              fundamentals.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            View My Work
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { ArrowUpRight, Code2, Database, BarChart3, Wrench, BrainCircuit } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive and accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
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
    skills: ["Power BI", "MS Excel", "Pandas", "NumPy", "Matplotlib", "Data Cleaning", "Data Visualization"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Tools that support development and analysis workflows.",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "npm"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    description: "Foundational tools for data preparation and predictive modeling.",
    skills: ["Scikit-learn", "Statistical Analysis", "Feature Preparation", "Model Evaluation"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      <section className="relative border-b border-white/[0.08] px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            Technical Expertise
          </span>
          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Skills that turn
            <span className="block bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              ideas into reality.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            My technical toolkit covers frontend development, backend
            fundamentals, databases, and data analytics. I continue to expand
            these skills through practical projects and learning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/[0.09] bg-[#080d1a] p-6 transition hover:border-violet-300/35 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/10 text-violet-200">
                  <Icon size={23} />
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-violet-300">
                  CATEGORY 0{index + 1}
                </p>
                <h2 className="mt-2 text-xl font-bold">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-9">
          <h2 className="text-2xl font-bold">Always learning</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            I believe the best way to improve is to keep building, solve real
            problems, learn from feedback, and strengthen the fundamentals.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
          >
            Explore My Projects
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
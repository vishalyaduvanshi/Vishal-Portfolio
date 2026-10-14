
"use client";

import { useState } from "react";

const skills = [
  { name: "Next.js", icon: "nextjs", category: "Frontend", color: "#FFFFFF" },
  { name: "React", icon: "react", category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", icon: "typescript", category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", category: "Frontend", color: "#F7DF1E" },
  { name: "Python", icon: "python", category: "Backend", color: "#FFD43B" },
  { name: "SQL", icon: "mysql", category: "Data & Analytics", color: "#38BDF8" },
  { name: "Power BI", icon: "powerbi", category: "Data & Analytics", color: "#F2C811" },
  { name: "MongoDB", icon: "mongodb", category: "Backend", color: "#47A248" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend", color: "#38BDF8" },
  { name: "Git", icon: "git", category: "Tools", color: "#F05032" },
  { name: "Figma", icon: "figma", category: "Tools", color: "#F24E1E" },
  { name: "VS Code", icon: "vscode", category: "Tools", color: "#007ACC" },
];

const categories = ["Frontend", "Backend", "Data & Analytics", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [showAll, setShowAll] = useState(true);

  const visibleSkills = showAll
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden border-y border-blue-400/15 bg-[#030711] px-5 py-10 text-white sm:px-8 lg:py-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-600/[0.08] blur-[110px]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/[0.08] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.35) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Shared container alignment */}
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12">
        {/* Heading */}
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            My Skills
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Tools for the Job.
          </h2>

          <p className="mt-3 max-w-md text-base leading-7 text-slate-400">
            The technologies I use to turn ideas into reliable,
            maintainable and high-performance solutions.
          </p>
        </div>

        {/* Technologies */}
        <div className="min-w-0">
          {/* Category filters */}
          <div className="mb-5 flex flex-wrap items-center justify-end gap-2 lg:pr-8">
            {categories.map((category) => {
              const active = activeCategory === category && !showAll;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium transition duration-300 ${
                    active
                      ? "border-violet-400/60 bg-violet-500/15 text-white shadow-[0_0_18px_rgba(139,92,246,0.12)]"
                      : "border-white/10 bg-[#0A1120]/80 text-slate-400 hover:border-blue-300/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setShowAll(true)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium transition ${
                showAll
                  ? "border-blue-400/50 bg-blue-500/10 text-blue-200"
                  : "border-white/10 bg-[#0A1120]/80 text-slate-400 hover:border-blue-300/40 hover:text-white"
              }`}
            >
              All Skills
            </button>
          </div>

          {/* Consistent icon grid */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4 xl:grid-cols-6">
            {visibleSkills.map((skill) => (
              <div
                key={skill.name}
                className="group flex min-w-0 flex-col items-center text-center"
              >
                <div className="flex h-[66px] w-full max-w-[76px] items-center justify-center rounded-2xl border border-white/[0.10] bg-gradient-to-br from-[#111A2B] to-[#080D18] shadow-[0_8px_24px_rgba(0,0,0,0.20)] transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-300/40 group-hover:shadow-[0_8px_28px_rgba(37,99,235,0.15)] sm:h-[70px] sm:max-w-[80px]">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={skill.name}
                    loading="lazy"
                    className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";

                      const fallback =
                        event.currentTarget.nextElementSibling as HTMLElement | null;

                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />

                  <span
                    className="hidden h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      color: skill.color,
                      backgroundColor: `${skill.color}15`,
                    }}
                  >
                    {skill.name === "TypeScript"
                      ? "TS"
                      : skill.name === "JavaScript"
                        ? "JS"
                        : skill.name.slice(0, 2)}
                  </span>
                </div>

                <span className="mt-2.5 max-w-full text-center text-xs font-medium leading-4 text-slate-300 transition-colors group-hover:text-white sm:text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

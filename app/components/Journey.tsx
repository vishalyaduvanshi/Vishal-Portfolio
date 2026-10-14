
"use client";

import { GraduationCap, Code2, BarChart3, Award } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "Started B.Tech",
    description: "Information Technology",
    icon: GraduationCap,
    color: "#818CF8",
  },
  {
    year: "2023",
    title: "Built First Major Project",
    description: "Gained hands-on development experience",
    icon: Code2,
    color: "#38BDF8",
  },
  {
    year: "2024",
    title: "Explored Data Analytics",
    description: "Worked with Python, SQL and Power BI",
    icon: BarChart3,
    color: "#C084FC",
  },
  {
    year: "2025",
    title: "Completed Graduation",
    description: "B.Tech in Information Technology, Greater Noida",
    icon: Award,
    color: "#60A5FA",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative isolate w-full overflow-hidden border-y border-blue-400/15 bg-[#030711] px-5 py-8 text-white sm:px-8 lg:py-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-48 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-48 w-72 rounded-full bg-violet-600/[0.09] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.35) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1450px]">
        {/* Section heading */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            My Journey
          </div>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              Building.
            </span>
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            A timeline of my academic journey, skills and achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-indigo-500/50 via-blue-400/40 to-violet-500/50 md:block" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
            {milestones.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.year}
                  className="group relative min-w-0"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 mb-3 hidden h-[15px] items-center md:flex">
                    <span
                      className="h-[9px] w-[9px] rounded-full border-2 border-[#030711] ring-1 ring-white/10"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 0 12px ${item.color}80`,
                      }}
                    />
                  </div>

                  {/* Milestone card */}
                  <div className="h-full min-h-[100px] rounded-xl border border-white/10 bg-gradient-to-br from-[#101A2D]/95 to-[#070D19]/95 p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-[0_10px_28px_rgba(37,99,235,0.10)] sm:p-4">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span
                        className="text-xs font-bold tracking-wider sm:text-sm"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </span>

                      <Icon
                        size={18}
                        style={{ color: item.color }}
                        className="shrink-0 opacity-80 transition group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="text-sm font-bold leading-6 text-slate-100 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-6">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

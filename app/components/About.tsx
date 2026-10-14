
"use client";

import {
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Target,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const values = [
  {
    title: "Curiosity",
    description: "Always eager to learn and explore new ideas.",
    icon: Lightbulb,
    color: "#F59E0B",
  },
  {
    title: "Consistency",
    description: "Small steps create big results over time.",
    icon: TrendingUp,
    color: "#38BDF8",
  },
  {
    title: "Ownership",
    description: "I take responsibility and deliver with quality.",
    icon: Target,
    color: "#E879F9",
  },
  {
    title: "Impact",
    description: "Building products that solve real problems.",
    icon: Sparkles,
    color: "#22D3EE",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden border-y border-blue-400/20 bg-[#030711] text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/about.png')" }}
      />

      {/* Readable background overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#030711]/10 via-[#030711]/50 to-[#030711]/40" />

      {/* Original layout preserved */}
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-6 px-5 py-7 sm:px-6 lg:min-h-[390px] lg:grid-cols-[0.9fr_1fr_1fr] lg:gap-6 lg:px-0 lg:py-6 xl:gap-8">

        {/* LEFT: Education and philosophy */}
        <div className="relative min-h-[300px] sm:min-h-[320px] lg:min-h-[340px]">
          <div className="absolute bottom-2 left-0 z-10 flex max-w-[235px] items-start gap-3 rounded-xl border border-blue-300/25 bg-[#071224]/90 p-3.5 shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-xl sm:bottom-3 sm:left-2 sm:p-4">
            <div className="shrink-0 rounded-lg border border-indigo-400/25 bg-indigo-500/10 p-2 text-indigo-300">
              <GraduationCap size={25} />
            </div>

            <div>
              <h3 className="text-sm font-bold sm:text-base">
                B.Tech
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                Information Technology
              </p>
              <p className="mt-1 text-xs text-blue-200 sm:text-sm">
                2021 – 2025
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                GL Bajaj Institute
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-24 z-10 sm:right-2 sm:top-28 lg:right-0 lg:top-[68%] lg:-translate-y-1/2">
            <p className="font-serif text-lg italic leading-tight text-white drop-shadow-[0_0_12px_rgba(167,139,250,0.7)] sm:text-xl">
              Same
              <br />
              Curiosity.
              <br />
              Different
              <br />
              Perspective.
            </p>

            <svg
              viewBox="0 0 90 30"
              className="mt-2 w-16 text-blue-300 sm:w-20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C25 28 53 25 76 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M65 4 L77 12 L67 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* CENTER: About content */}
        <div className="min-w-0 py-2 lg:py-0">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            About Me
          </div>

          <h2 className="text-2xl font-bold leading-[1.12] tracking-tight sm:text-3xl">
            Developer by Skill.
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Problem Solver by Nature.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">
            I'm Vishal Yadav, an Information Technology graduate from
            GL Bajaj Institute of Technology and Management, Greater
            Noida. I love building modern web applications, clean
            interfaces and data-driven solutions that create real value.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-7">
            Beyond development, competitive Kho-Kho has taught me
            teamwork, discipline, leadership and how to stay focused
            under pressure.
          </p>

          <a
            href="#skills"
            className="group mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-blue-300 hover:bg-blue-500/15 sm:text-sm"
          >
            More About Me
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* RIGHT: Values cards */}
        <div className="min-w-0 py-2 lg:py-0">
          <h3 className="mb-3 text-sm font-bold text-white sm:text-base">
            What Drives Me
          </h3>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group flex min-h-[100px] flex-col rounded-xl border border-white/10 bg-[#081326]/85 p-3.5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-[#0B1830]/95 sm:min-h-[110px] sm:p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon
                      size={20}
                      style={{ color: value.color }}
                      className="shrink-0"
                    />

                    <h4 className="text-xs font-bold text-slate-100 sm:text-sm">
                      {value.title}
                    </h4>
                  </div>

                  <p className="text-xs leading-[1.7] text-slate-400 sm:text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

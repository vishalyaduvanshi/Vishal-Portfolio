import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Trophy,
  Users,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    period: "Leadership",
    title: "Sports Director",
    organization: "Rotaract Club, GL Bajaj",
    icon: Users,
    accent: "violet",
    details:
      "Contributed to sports activities, coordination, teamwork, and student engagement through club responsibilities.",
  },
  {
    period: "Leadership",
    title: "Sports Committee Treasurer",
    organization: "GL Bajaj Institute of Technology and Management",
    icon: BriefcaseBusiness,
    accent: "blue",
    details:
      "Supported sports committee responsibilities, event coordination, and student activities.",
  },
  {
    period: "Sports",
    title: "Kho-Kho Captain & Coach",
    organization: "College Sports",
    icon: Trophy,
    accent: "violet",
    details:
      "Led teammates in training, discipline, teamwork, and competitive sports activities.",
  },
  {
    period: "Community",
    title: "NSS Project Leader",
    organization: "National Service Scheme",
    icon: Users,
    accent: "blue",
    details:
      "Participated in volunteering and community initiatives, including blood donation activities.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      {/* Page Hero */}
      <section className="relative border-b border-white/[0.07] px-5 py-14 sm:px-8 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-600/[0.13] blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/[0.10] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-500/[0.08] px-3.5 py-2 text-xs font-semibold text-violet-200 sm:text-sm">
            <Sparkles size={15} />
            Experience &amp; Leadership
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Experience through
            <span className="mt-1 block bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              building &amp; leading.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            A journey shaped by technical learning, sports leadership,
            teamwork, and community involvement.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs text-white/65">
              Technical Projects
            </span>
            <span className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs text-white/65">
              Team Leadership
            </span>
            <span className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs text-white/65">
              Community Service
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12 lg:px-16">
        <div className="grid items-start gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Leadership Timeline */}
          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                  My Journey
                </p>
                <h2 className="mt-1.5 text-xl font-bold sm:text-2xl">
                  Leadership &amp; Activities
                </h2>
              </div>

              <span className="rounded-lg border border-white/[0.09] bg-white/[0.03] px-3 py-2 text-xs text-white/50">
                04 Roles
              </span>
            </div>

            <div className="relative space-y-3 before:absolute before:bottom-8 before:left-[21px] before:top-8 before:w-px before:bg-gradient-to-b before:from-violet-400/50 before:via-blue-400/30 before:to-transparent">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                const isViolet = item.accent === "violet";

                return (
                  <article
                    key={item.title}
                    className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0b1020] to-[#070b15] p-4 transition duration-300 hover:border-violet-300/30 hover:shadow-[0_12px_35px_rgba(109,40,217,0.09)] sm:p-5"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div
                        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition ${
                          isViolet
                            ? "border-violet-300/20 bg-violet-500/[0.10] text-violet-200 group-hover:border-violet-300/40"
                            : "border-blue-300/20 bg-blue-500/[0.10] text-blue-200 group-hover:border-blue-300/40"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                              isViolet ? "text-violet-300" : "text-blue-300"
                            }`}
                          >
                            {item.period}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-white/25" />

                          <span className="text-[10px] text-white/35">
                            ROLE 0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-1.5 text-base font-bold leading-snug text-white sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">
                          {item.organization}
                        </p>

                        <p className="mt-3 text-xs leading-6 text-white/60 sm:text-sm">
                          {item.details}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="mt-1 shrink-0 text-white/20 transition group-hover:text-violet-300"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Education and Achievements */}
          <div className="space-y-3">
            <div className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-300">
                Background
              </p>
              <h2 className="mt-1.5 text-xl font-bold sm:text-2xl">
                Education &amp; Achievements
              </h2>
            </div>

            {/* Education Card */}
            <article className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0b1020] to-[#070b15] p-5 transition hover:border-blue-300/30">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/[0.10] text-blue-200">
                  <GraduationCap size={22} />
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                    Education
                  </span>

                  <h3 className="mt-2 text-base font-bold leading-snug sm:text-lg">
                    B.Tech — Information Technology
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/55 sm:text-sm">
                    GL Bajaj Institute of Technology and Management,
                    Greater Noida
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-white/55">
                    <CalendarDays size={14} className="text-blue-300" />
                    2021 – 2025
                  </div>
                </div>
              </div>
            </article>

            {/* Achievement Card */}
            <article className="relative overflow-hidden rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.10] via-[#0b1020] to-blue-500/[0.06] p-5">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-500/[0.10] blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/10 text-violet-200">
                    <Trophy size={21} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
                      Sports Achievements
                    </p>
                    <h3 className="mt-1 text-lg font-bold">
                      Kho-Kho Competitions
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-white/60 sm:text-sm">
                  State-level and zonal-level competition wins. Sports have
                  helped strengthen my discipline, teamwork, and leadership.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-violet-300/15 bg-black/20 p-3.5">
                    <Trophy size={17} className="text-violet-300" />
                    <p className="mt-2 text-sm font-bold text-white">
                      State Level
                    </p>
                    <p className="mt-1 text-[11px] text-white/45">Kho-Kho</p>
                  </div>

                  <div className="rounded-xl border border-blue-300/15 bg-black/20 p-3.5">
                    <Trophy size={17} className="text-blue-300" />
                    <p className="mt-2 text-sm font-bold text-white">
                      Zonal Level
                    </p>
                    <p className="mt-1 text-[11px] text-white/45">Kho-Kho</p>
                  </div>
                </div>
              </div>
            </article>

            {/* About Link */}
            <Link
              href="/about"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-violet-300/30 hover:bg-violet-500/[0.05]"
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  More About Me
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Discover my background and interests
                </p>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/[0.08] text-violet-200 transition group-hover:bg-violet-500/20">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
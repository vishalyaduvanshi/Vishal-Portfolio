import Image from "next/image";
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
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden border-b border-white/10 sm:min-h-[480px] lg:min-h-[520px]">
        <Image
          src="/experice.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-[1px] sm:blur-none"
        />

        <div className="absolute inset-0 bg-[#050914]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050914]/95 via-[#050914]/75 to-[#050914]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/75 via-transparent to-[#080b12]/15" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Sparkles size={16} />
              Experience &amp; Leadership
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Experience through
              <span className="mt-2 block text-blue-300">
                building &amp; leading.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              A journey shaped by technical learning, sports leadership,
              teamwork, and community involvement.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Technical Projects",
                "Team Leadership",
                "Community Service",
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

      {/* Experience and Background */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Leadership Timeline */}
          <div>
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  My Journey
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Leadership &amp; Activities
                </h2>
              </div>

              <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60">
                04 Roles
              </span>
            </div>

            <div className="space-y-4">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                const isViolet = item.accent === "violet";

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-[#0d121d] p-5 transition-colors duration-300 hover:border-blue-300/30 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                          isViolet
                            ? "border-violet-300/20 bg-violet-400/10 text-violet-200"
                            : "border-blue-300/20 bg-blue-400/10 text-blue-200"
                        }`}
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${
                              isViolet ? "text-violet-300" : "text-blue-300"
                            }`}
                          >
                            {item.period}
                          </span>
                          <span className="text-xs text-white/30">
                            ROLE 0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-2 text-base font-bold leading-snug sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white/50">
                          {item.organization}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-white/65">
                          {item.details}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-white/30 transition group-hover:text-blue-300"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Education and Achievements */}
          <div className="space-y-4">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Background
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Education &amp; Achievements
              </h2>
            </div>

            {/* Education */}
            <article className="rounded-2xl border border-white/10 bg-[#0d121d] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
                  <GraduationCap size={23} />
                </div>

                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Education
                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-snug">
                    B.Tech — Information Technology
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    GL Bajaj Institute of Technology and Management,
                    Greater Noida
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60">
                    <CalendarDays size={15} className="text-blue-300" />
                    2021 – 2025
                  </div>
                </div>
              </div>
            </article>

            {/* Sports Achievements */}
            <article className="rounded-2xl border border-white/10 bg-[#0d121d] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-400/10 text-amber-200">
                  <Trophy size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Sports Achievements
                  </p>
                  <h3 className="mt-1 text-lg font-bold">
                    Kho-Kho Competitions
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/65">
                State-level and zonal-level competition wins. Sports have
                helped strengthen my discipline, teamwork, and leadership.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <Trophy size={18} className="text-amber-300" />
                  <p className="mt-3 text-sm font-bold">State Level</p>
                  <p className="mt-1 text-xs text-white/45">Kho-Kho</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <Trophy size={18} className="text-blue-300" />
                  <p className="mt-3 text-sm font-bold">Zonal Level</p>
                  <p className="mt-1 text-xs text-white/45">Kho-Kho</p>
                </div>
              </div>
            </article>

            {/* About */}
            <Link
              href="/about"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d121d] p-5 transition-colors hover:border-blue-300/30"
            >
              <div>
                <p className="text-sm font-semibold">More About Me</p>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  Discover my background and interests
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition group-hover:text-blue-300">
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Trophy,
  Users,
  Database,
  BarChart3,
  Laptop,
  BookOpen,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Python",
  "SQL",
  "MySQL",
  "MongoDB",
  "Git & GitHub",
  "Pandas",
  "NumPy",
  "Power BI",
];

const projects = [
  {
    number: "01",
    title: "Ranapay- Giftcard",
    category: "Gift Card Marketplace",
    description:
      "A premium gift card marketplace focused on modern UI, responsive layouts, product discovery and a smooth shopping experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    color: "from-violet-500 to-blue-500",
  },
  {
    number: "02",
    title: "BookOurBus / SeatFix",
    category: "Travel & Booking",
    description:
      "A bus booking interface designed to make route discovery, seat selection and the overall booking experience clear and user-friendly.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "03",
    title: "PhoolPaudha",
    category: "E-commerce",
    description:
      "A plant-store experience featuring product categories, responsive product cards and a streamlined shopping journey.",
    technologies: ["Next.js", "React", "CSS"],
    color: "from-emerald-500 to-green-400",
  },
  {
    number: "04",
    title: "Data Analysis Projects",
    category: "Analytics & Visualization",
    description:
      "Data-focused work involving Python, SQL and visualization tools to explore datasets, identify patterns and present useful insights.",
    technologies: ["Python", "SQL", "Power BI"],
    color: "from-orange-500 to-amber-400",
  },
];

const leadership = [
  {
    title: "Sports Director",
    organization: "Rotaract Club of GL Bajaj",
    description:
      "Contributed to sports-related activities, team coordination and student participation. This responsibility helped me develop planning, communication and organizational skills.",
    icon: Trophy,
    color: "text-amber-300",
    bg: "bg-amber-400/10",
    link: "https://www.instagram.com/p/DAtXX86zdKZ/?dlrf=MWhtNDRwdnM0Nzg5Yg==",
    linkText: "View Sports Director Post",
  },
  {
    title: "Sports Committee Treasurer",
    organization: "GL Bajaj",
    description:
      "Held a responsibility within the college Sports Committee, supporting sports activities and developing accountability, coordination and leadership.",
    icon: BriefcaseBusiness,
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
    link: "https://www.instagram.com/p/DAtXX86zdKZ/?dlrf=MWhtNDRwdnM0Nzg5Yg==",
    linkText: "View Treasurer Post",
  },
  {
    title: "Club Adviser",
    organization: "GL Bajaj Sports Club",
    description:
      "Continuing my involvement in the college sports community by contributing experience, guidance and support to club activities.",
    icon: ShieldCheck,
    color: "text-violet-300",
    bg: "bg-violet-500/10",
    link: "https://www.instagram.com/sports_glbajaj/p/DS-b2snD-nm/",
    linkText: "View Club Adviser Post",
  },
  {
    title: "Kho-Kho Team Captain",
    organization: "College Sports Team",
    description:
      "Led teammates in competitive matches, encouraged team discipline and coordination, and contributed to match preparation and collective performance.",
    icon: Users,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    title: "Kho-Kho Coach",
    organization: "Sports & Team Development",
    description:
      "Supported practice, team preparation and match strategy, sharing knowledge of the sport and encouraging teamwork and consistent performance.",
    icon: Medal,
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  {
    title: "NSS Project Leader",
    organization: "National Service Scheme",
    description:
      "Contributed to volunteering and community-oriented activities, strengthening my sense of social responsibility, collaboration and service.",
    icon: HeartPulse,
    color: "text-rose-300",
    bg: "bg-rose-500/10",
  },
];

const achievements = [
  {
    title: "State-Level Kho-Kho Winner",
    description:
      "Won the State-Level Kho-Kho Championship in Lucknow.",
    level: "STATE LEVEL",
    image: "/state.jpg",
    post: "https://www.instagram.com/vishal_yaduvanshi1777/p/C0Z9H6cynVH/",
    icon: Trophy,
  },
  {
    title: "AKTU Zonal Tournament Winner",
    description:
      "Achieved victory at the zonal tournament in GB Nagar organised under AKTU.",
    level: "ZONAL LEVEL",
    image: "/zonal.jpg",
    post: "https://www.instagram.com/vishal_yaduvanshi1777/p/CzPC5RUSI2r/",
    icon: Medal,
  },
  {
    title: "Team Player of the Year",
    description:
      "Recognised by the Rotaract Club of GL Bajaj in 2023 for teamwork, collaboration and contribution.",
    level: "2023 AWARD",
    icon: Award,
  },
  {
    title: "District-Level Kho-Kho Winner",
    description:
      "District-level competition wins during the 2023–24 and 2024–25 seasons.",
    level: "DISTRICT LEVEL",
    icon: ShieldCheck,
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    subject: "Information Technology",
    institution: "GL Bajaj Institute of Technology and Management",
    location: "Greater Noida, Uttar Pradesh",
    period: "2021 – 2025",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary — Class XII",
    subject: "CBSE",
    institution: "K.T. Public School",
    location: "Ayodhya, Uttar Pradesh",
    period: "2019 – 2020",
    icon: BookOpen,
  },
  {
    degree: "Secondary — Class X",
    subject: "CBSE",
    institution: "K.T. Public School",
    location: "Ayodhya, Uttar Pradesh",
    period: "2017 – 2018",
    icon: BookOpen,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030711] text-white">
      {/* PREMIUM HERO BANNER */}
      <section className="relative isolate min-h-[620px] overflow-hidden sm:min-h-[650px] lg:min-h-[690px]">
        <Image
          src="/about.png"
          alt="Vishal Yadav developer portfolio banner"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#030711]/5 via-[#030711]/20 to-[#030711]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-[#030711]/10" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] items-center justify-end px-5 pb-16 pt-24 sm:min-h-[650px] sm:px-8 lg:min-h-[690px] lg:px-14">
          <div className="w-full max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-[#060b1b]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              About Me
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Hi, I&apos;m
            </p>

            <h1 className="mt-3 text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Vishal
              <span className="mt-2 block bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Yadav.
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-bold leading-relaxed text-white sm:text-2xl">
              Full-Stack Developer
              <span className="mt-1 block text-slate-300">
                Building Ideas Into Digital Products
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              I build modern web applications and responsive digital
              experiences using React, Next.js and modern web technologies.
              Alongside technology, sports leadership and community service
              have shaped my discipline, teamwork and problem-solving mindset.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#developer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore My Journey
                <ArrowDown size={17} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-violet-300 hover:bg-white/10"
              >
                Contact Me
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-200 sm:text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-violet-300" />
                India
              </span>
              <span className="flex items-center gap-2">
                <Code2 size={15} className="text-cyan-300" />
                Web Development
              </span>
              <a
                href="https://github.com/vishalyaduvanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaGithub size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-yadav-892113233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaLinkedinIn size={15} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPER INTRODUCTION */}
      <section
        id="developer"
        className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
      >
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[110px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
              My Professional Profile
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              I Create.
              <span className="block text-slate-400">I Learn. I Improve.</span>
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-400" />

            <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
              I am a Full-Stack Developer interested in creating useful,
              accessible and responsive web applications. I enjoy working
              across the frontend, connecting application interfaces with
              backend services and databases, and improving the complete
              user experience.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              My development work includes projects in e-commerce, booking
              interfaces, portfolio experiences and data-focused applications.
              I value readable code, practical functionality, responsive
              design and continuous learning.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
              My time in college also gave me opportunities to lead sports
              teams, coordinate activities and participate in community
              initiatives. These experiences have helped me build a
              collaborative mindset that I bring to technical work.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/vishalyaduvanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:border-violet-400/40"
              >
                <FaGithub size={17} />
                GitHub Profile
                <ExternalLink size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-yadav-892113233/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:border-blue-400/40"
              >
                <FaLinkedinIn size={17} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Laptop,
                title: "Frontend Development",
                text: "Responsive interfaces and user experiences with React, Next.js and Tailwind CSS.",
                color: "text-violet-300",
                bg: "bg-violet-500/10",
              },
              {
                icon: Database,
                title: "Backend & Databases",
                text: "Application logic, API integration and database-focused development.",
                color: "text-cyan-300",
                bg: "bg-cyan-500/10",
              },
              {
                icon: BarChart3,
                title: "Data & Analytics",
                text: "Python, SQL, Excel and Power BI for data exploration and visualization.",
                color: "text-emerald-300",
                bg: "bg-emerald-500/10",
              },
              {
                icon: Users,
                title: "Leadership & Teamwork",
                text: "Team coordination, communication, discipline and shared responsibility.",
                color: "text-amber-300",
                bg: "bg-amber-400/10",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                  >
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            My Technical Toolkit
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Technologies & Skills
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Technologies I use or have worked with across web development,
            programming, databases and analytics.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#080d1c] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:text-white"
              >
                <CheckCircle2 size={15} className="text-violet-300" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Projects & Practical Work
            </h2>
          </div>
          <a
            href="https://github.com/vishalyaduvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white"
          >
            Explore GitHub <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 transition hover:border-violet-400/30 hover:bg-white/[0.045] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-sm font-black text-white`}
                >
                  {project.number}
                </span>
                <Code2 size={22} className="text-slate-500" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-300">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
            Beyond Development
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Leadership & Responsibilities
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            My college journey includes sports leadership, club responsibilities
            and community service. These experiences have helped me understand
            teamwork, accountability, coordination and the importance of
            supporting others.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {leadership.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#080d1b]/80 p-6 transition hover:border-violet-400/30 sm:p-7"
                >
                  <span className="absolute right-5 top-3 text-5xl font-black text-white/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                    >
                      <Icon size={23} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium text-violet-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white"
                    >
                      <FaInstagram size={16} />
                      {item.linkText}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATES */}
      <section id="achievements" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 sm:text-sm">
              Achievements & Recognition
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Hard Work. Teamwork. Victories.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-400">
            Sports achievements that reflect preparation, discipline,
            teamwork and competitive spirit.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] transition hover:border-amber-300/25"
              >
                {item.image && (
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title} certificate image`}
                    className="group relative block aspect-[4/3] overflow-hidden bg-[#080d1b]"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent px-5 pb-4 pt-12">
                      <span className="text-xs font-semibold text-white/90">
                        View Certificate
                      </span>
                      <ExternalLink size={17} className="text-white" />
                    </div>
                  </a>
                )}

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-amber-300/15 bg-amber-300/[0.06] px-3 py-1.5 text-[10px] font-bold tracking-wider text-amber-200">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {item.post && (
                    <a
                      href={item.post}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white"
                    >
                      <FaInstagram size={16} />
                      View Achievement Post
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Trophy size={22} className="mt-1 shrink-0 text-amber-300" />
            <div>
              <h3 className="font-bold text-white">
                A Team-First Mindset
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Competitive sports taught me that success depends on
                preparation, trust, consistent effort and working together.
                These are the same principles I value when contributing to a
                development team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & TRAINING */}
      <section className="border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
            Academic Background
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Education & Training
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.degree}
                  className={`rounded-3xl border border-white/[0.09] bg-[#080d1b]/80 p-6 sm:p-7 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-bold">{item.degree}</h3>
                      <p className="mt-1 text-sm text-slate-300">
                        {item.subject}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/[0.08] bg-[#080d1b]/70 p-5">
              <p className="text-sm font-bold text-white">
                Machine Learning & Python
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Technophilia Summer Training in association with B-Club,
                IIT Kharagpur — May–June 2022.
              </p>
            </article>

            <article className="rounded-2xl border border-white/[0.08] bg-[#080d1b]/70 p-5">
              <p className="text-sm font-bold text-white">
                Full-Stack MERN Development
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Additional training in modern full-stack development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NSS & COMMUNITY SERVICE */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <div className="relative overflow-hidden rounded-3xl border border-rose-300/15 bg-gradient-to-br from-rose-500/[0.08] via-[#0a1020] to-violet-500/[0.06] p-6 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-60 w-60 rounded-full bg-rose-500/10 blur-[90px]" />

          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-300/15 bg-rose-400/10 text-rose-300">
              <HeartPulse size={31} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
                NSS · Volunteering · Social Impact
              </p>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Leadership Is Also About Giving Back.
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
                Through NSS and Rotaract activities, I have participated in
                volunteering and community initiatives, including blood
                donation activities. I value social responsibility, supporting
                others and contributing to initiatives that benefit the
                community.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/15 bg-rose-300/[0.05] px-4 py-2 text-sm text-rose-100">
                  <HeartPulse size={16} />
                  Blood Donation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  <Users size={16} />
                  NSS Volunteering
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  <ShieldCheck size={16} />
                  Community Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-[#11152b] via-[#0b1020] to-[#07101d] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                Let&apos;s Connect
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Let&apos;s build something meaningful together.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Interested in discussing a development project, collaboration
                or professional opportunity? Feel free to connect with me.
              </p>

              <a
                href="mailto:snyadav.vishal70@gmail.com"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
              >
                Send Me an Email
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+917071712176"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Phone size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="mt-1 break-all font-semibold text-white">
                    +91 7071712176
                  </p>
                </div>
                <ArrowRight size={17} className="ml-auto shrink-0 text-slate-500" />
              </a>

              <a
                href="mailto:snyadav.vishal70@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="mt-1 break-all font-semibold text-white">
                    snyadav.vishal70@gmail.com
                  </p>
                </div>
                <ArrowRight size={17} className="ml-auto shrink-0 text-slate-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-yadav-892113233/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <FaLinkedinIn size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">LinkedIn</p>
                  <p className="mt-1 font-semibold text-white">
                    Connect professionally
                  </p>
                </div>
                <ArrowRight size={17} className="ml-auto shrink-0 text-slate-500" />
              </a>

              <a
                href="https://www.instagram.com/sports_glbajaj/p/DS-b2snD-nm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-400/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
                  <FaInstagram size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Sports Club</p>
                  <p className="mt-1 font-semibold text-white">
                    Club Adviser Announcement
                  </p>
                </div>
                <ExternalLink size={17} className="ml-auto shrink-0 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
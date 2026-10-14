"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const skills = ["Next.js", "React", "Python", "SQL", "Power BI"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#030711] text-white"
    >
      {/* Single background shared visually with the header */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Vishal's developer portfolio and coding workspace"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle contrast for readable text without hiding the image */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#030711]/60 via-[#030711]/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#030711]/25 via-transparent to-[#030711]/10" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-5 pb-12 pt-24 sm:px-10 sm:pb-14 sm:pt-28 lg:px-16 lg:pt-24 xl:px-20">
        <div className="w-full max-w-[560px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-[#080d1c]/35 px-4 py-2 text-xs font-medium text-white sm:text-sm">
            <Sparkles size={15} className="text-violet-300" />
            Full-Stack Developer
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to Opportunities
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white sm:text-sm">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px]">
            Vishal
            <span className="block bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text pb-2 text-transparent">
              Yadav.
            </span>
          </h1>

          <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl">
            Turning Ideas Into{" "}
            <span className="text-violet-300">Real Products</span>
          </h2>

          <p className="mt-5 max-w-[510px] text-sm leading-7 text-white sm:text-base sm:leading-8">
            I build modern web applications, data solutions, and scalable
            digital products that solve real-world problems. I focus on clean
            interfaces, reliable functionality, and meaningful user
            experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/25 bg-[#080d1c]/40 px-4 py-2 text-xs font-medium text-white transition hover:border-violet-300/70 hover:bg-violet-500/20 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              View My Work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/35 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-white/10"
            >
              Let&apos;s Talk
            </Link>

            <a
              href="https://github.com/vishalyaduvanshi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-white/30 bg-black/20 p-3.5 text-white transition hover:border-violet-300 hover:text-violet-200"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-white/30 bg-black/20 p-3.5 text-white transition hover:border-violet-300 hover:text-violet-200"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap border-t border-white/25 pt-5">
            <div className="min-w-[100px] pr-6">
              <p className="text-2xl font-extrabold text-white">7+</p>
              <p className="mt-1 text-xs text-white/90">Projects</p>
            </div>

            <div className="min-w-[140px] border-l border-white/25 px-6">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Full-Stack
              </p>
              <p className="mt-1 text-xs text-white/90">Development</p>
            </div>

            <div className="min-w-[100px] border-l border-white/25 pl-6">
              <p className="text-2xl font-extrabold text-white">100%</p>
              <p className="mt-1 text-xs text-white/90">Commitment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-7 z-10 hidden items-center gap-3 text-[11px] tracking-[0.18em] text-white lg:flex">
        SCROLL TO EXPLORE
        <span className="h-px w-12 bg-violet-300" />
      </div>
    </section>
  );
}
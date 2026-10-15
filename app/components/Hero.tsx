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
      className="relative isolate w-full overflow-hidden bg-[#080B12] text-white sm:min-h-[100svh]"
    >
      {/* Background Image: mobile unchanged, desktop completely sharp */}
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Developer workspace background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="scale-[1.01] object-cover object-center blur-[2px] sm:scale-100 sm:blur-none"
        />
      </div>

      {/* Keep mobile appearance unchanged */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[#080B12]/50 sm:bg-[#080B12]/40" />

      {/* Improve desktop text readability without blurring the image */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-r from-[#080B12]/80 via-[#080B12]/60 to-[#080B12]/15 sm:from-[#080B12]/85 sm:via-[#080B12]/55 sm:to-[#080B12]/10" />

      {/* Bottom blending */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[-1] h-24 bg-gradient-to-t from-[#080B12]/65 to-transparent sm:h-32" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1600px] items-center px-5 pb-8 pt-7 sm:min-h-[100svh] sm:px-10 sm:pb-14 sm:pt-24 lg:px-16 lg:pt-20 xl:px-20">
        <div className="w-full max-w-[610px]">
          {/* Availability */}
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/25 bg-[#080B12]/80 px-3.5 py-2.5 text-xs font-medium text-white shadow-sm backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={16} className="shrink-0 text-violet-300" />
            <span>Full-Stack Developer</span>
            <span className="mx-0.5 h-1 w-1 rounded-full bg-slate-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Open to Opportunities</span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white sm:tracking-[0.28em]">
            Hello, I&apos;m
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,5rem)] font-bold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
            Vishal
            <span className="mt-1 block pb-2 text-white">
              Yadav<span className="text-violet-300">.</span>
            </span>
          </h1>

          <h2 className="mt-4 max-w-[550px] text-[22px] font-bold leading-snug text-white sm:text-2xl lg:text-[27px]">
            Turning Ideas Into{" "}
            <span className="text-violet-200">Real Products</span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white sm:text-base sm:leading-8">
            I build modern web applications, data solutions, and scalable
            digital products that solve real-world problems. I focus on clean
            interfaces, reliable functionality, and meaningful user
            experiences.
          </p>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/30 bg-[#080B12]/75 px-3.5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-violet-300/60 hover:bg-white/[0.08] sm:px-4"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-violet-600 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-violet-500 sm:px-6"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 bg-[#080B12]/80 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10 sm:px-6"
            >
              Let&apos;s Talk
            </Link>

            <a
              href="https://github.com/vishalyaduvanshi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/35 bg-[#080B12]/80 text-white transition-colors duration-200 hover:border-violet-300/60 hover:text-violet-200"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-yadav-892113233/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/35 bg-[#080B12]/80 text-white transition-colors duration-200 hover:border-violet-300/60 hover:text-violet-200"
            >
              <FaLinkedinIn size={19} />
            </a>
          </div>

          {/* Portfolio Highlights */}
          <div className="mt-7 grid max-w-[480px] grid-cols-3 border-t border-white/30 pt-5 sm:mt-9">
            <div className="pr-3 sm:pr-6">
              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                7+
              </p>
              <p className="mt-1.5 text-xs text-white">Projects</p>
            </div>

            <div className="border-l border-white/30 px-3 sm:px-6">
              <p className="text-base font-bold text-white sm:text-xl">
                Full-Stack
              </p>
              <p className="mt-1.5 text-xs text-white">Development</p>
            </div>

            <div className="border-l border-white/30 pl-3 sm:pl-6">
              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                100%
              </p>
              <p className="mt-1.5 text-xs text-white">Commitment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-6 right-10 z-10 hidden items-center gap-3 text-[10px] font-medium tracking-[0.16em] text-white lg:flex">
        SCROLL TO EXPLORE
        <span className="h-px w-10 bg-violet-300/80" />
      </div>
    </section>
  );
}
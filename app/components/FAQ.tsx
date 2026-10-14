
"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What kind of projects do you build?",
    answer:
      "I build modern web applications, e-commerce platforms, dashboards, admin panels and scalable digital products using Next.js, React, TypeScript and other modern technologies.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "My technology stack includes Next.js, React, JavaScript, TypeScript, Python, SQL, MongoDB, Tailwind CSS and Power BI.",
  },
  {
    question: "Are you open to freelance or full-time opportunities?",
    answer:
      "Yes, I am open to discussing suitable full-time roles, freelance projects and collaborations where I can contribute my development skills.",
  },
  {
    question: "How can we discuss a project?",
    answer:
      "You can contact me through the Contact section of my portfolio. Share your idea, requirements and timeline, and we can discuss the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden border-y border-blue-400/15 bg-[#030711] px-5 py-14 text-white sm:px-8 sm:py-16"
    >
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/[0.09] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-72 rounded-full bg-violet-600/[0.08] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[850px]">
        {/* Center heading */}
        <div className="mb-9 text-center sm:mb-11">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
            <Sparkles size={15} />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Questions?{" "}
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Answered.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-slate-400">
            A few things you might want to know about my work,
            skills and collaboration.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-400/30 bg-[#0B1425]/95 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
                    : "border-white/[0.09] bg-[#08101E]/80 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5 sm:py-[18px]"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-sm font-bold ${
                      isOpen
                        ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                        : "border-white/10 bg-white/[0.03] text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-base font-semibold leading-6 text-slate-100 sm:text-[17px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-300" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 pl-16 pr-5 text-sm leading-7 text-slate-400 sm:px-5 sm:pb-5 sm:pl-[68px] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom contact link */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-400">
          <span>Still have questions?</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-300 transition hover:text-violet-300"
          >
            Let&apos;s talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

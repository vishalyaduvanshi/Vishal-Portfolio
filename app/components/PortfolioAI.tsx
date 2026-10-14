"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageCircle,
  Minus,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const questions = [
  "Who is Vishal Yadav?",
  "Tell me about your education.",
  "What are your technical skills?",
  "Which programming languages do you know?",
  "Tell me about your frontend skills.",
  "What backend technologies do you use?",
  "Do you know Python?",
  "Do you know SQL and databases?",
  "What is your Power BI experience?",
  "Tell me about your AI/ML experience.",
  "What is Pay-Zone?",
  "Tell me about Naukri X.",
  "What is PhoolPaudha?",
  "Tell me about BookOurBus.",
  "What is your GitHub profile?",
  "Have you done any internships?",
  "What are your educational achievements?",
  "Do you have leadership experience?",
  "Are you available for opportunities?",
  "How can I contact you?",
];

const knowledge: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["who are you", "who is vishal", "about vishal", "introduce", "yourself"],
    answer:
      "Vishal Yadav is an IT graduate from GL Bajaj Institute of Technology and Management. He works on web development projects and has experience with technologies such as Next.js, React, Python, SQL and Power BI.",
  },
  {
    keywords: ["education", "college", "degree", "qualification", "study"],
    answer:
      "Vishal completed his B.Tech in Information Technology at GL Bajaj Institute of Technology and Management, Greater Noida. His education period was November 2021 to July 2025.",
  },
  {
    keywords: ["technical skills", "skills", "tech stack", "technologies"],
    answer:
      "His technical toolkit includes Python, SQL, JavaScript/TypeScript, React, Next.js, Tailwind CSS, data analysis, Power BI, Excel, Pandas, NumPy, Matplotlib, Scikit-learn, MySQL and MongoDB.",
  },
  {
    keywords: ["programming language", "languages", "coding"],
    answer:
      "Vishal has worked with Python, JavaScript and TypeScript in his development and data-related work. Ask about a specific language if you want more detail.",
  },
  {
    keywords: ["frontend", "front end", "ui", "user interface", "design"],
    answer:
      "His frontend work includes React, Next.js, Tailwind CSS, responsive layouts, reusable components and interactive user interfaces.",
  },
  {
    keywords: ["backend", "back end", "api", "server"],
    answer:
      "His project work involves API integration and web application development. Technologies used across his work include Next.js and database tools. Ask about a particular project for more context.",
  },
  {
    keywords: ["python"],
    answer:
      "Python is part of Vishal's technical toolkit. He has worked with data-analysis libraries including Pandas, NumPy, Matplotlib, SciPy and Scikit-learn.",
  },
  {
    keywords: ["sql", "database", "mysql", "mongodb"],
    answer:
      "Vishal's database-related skills include SQL, MySQL and MongoDB. These are useful for storing, querying and managing application data.",
  },
  {
    keywords: ["power bi", "powerbi", "data analyst", "data analysis", "analytics"],
    answer:
      "Vishal has worked on data analysis and Power BI, with skills in data cleaning, Excel, statistical analysis, data visualization and Python data libraries.",
  },
  {
    keywords: ["ai/ml", "machine learning", "artificial intelligence", "ml experience"],
    answer:
      "Vishal completed machine-learning training through Technophilia Summer Training associated with IIT Kharagpur and an AI-ML virtual internship supported by India Edu Program (Google for Developers).",
  },
  {
    keywords: ["pay-zone", "pay zone", "gift card", "giftcard"],
    answer:
      "Pay-Zone is a premium digital gift-card marketplace project. Its interface includes gift-card categories, popular brands, offers, recommendations and a responsive shopping experience.",
  },
  {
    keywords: ["naukri x", "naukrix", "job portal", "recruitment"],
    answer:
      "Naukri X is a job-portal project with an admin interface for jobs, applications, interviews and team management. The work includes applicant views, filtering and interview scheduling UI.",
  },
  {
    keywords: ["phoolpaudha", "phool paudha", "plant store", "plants"],
    answer:
      "PhoolPaudha is a plant-store project with product categories, plant listings, service sections and a responsive shopping interface.",
  },
  {
    keywords: ["bookourbus", "book our bus", "bus booking"],
    answer:
      "BookOurBus is a bus-booking landing-page project inspired by online bus reservation platforms. Its planned sections include offers, popular routes, reviews, FAQs and calls to action.",
  },
  {
    keywords: ["github", "source code", "repositories", "repo"],
    answer:
      "You can explore Vishal's GitHub profile here: https://github.com/vishalyaduvanshi. His data-analysis project repository is available at https://github.com/vishalyaduvanshi/DataAnalysisProjects.",
  },
  {
    keywords: ["internship", "internships", "work experience", "training"],
    answer:
      "Vishal has worked on a Power BI data-analyst internship and completed an AI-ML virtual internship supported by India Edu Program (Google for Developers). He also undertook machine-learning training through Technophilia Summer Training associated with IIT Kharagpur.",
  },
  {
    keywords: ["achievement", "awards", "sports", "medal", "trophy"],
    answer:
      "Vishal has a strong sports and leadership background. He captained his college Kho-Kho team, won state- and zonal-level competitions, received the Rotaract Club's Team Player of the Year award in 2023, and has mentioned winning more than 30 trophies.",
  },
  {
    keywords: ["leadership", "leader", "captain", "rotaract", "teamwork"],
    answer:
      "Vishal has held student leadership roles including Kho-Kho team captain and sports-related roles in the Rotaract Club and college sports club. These roles involved teamwork, coordination and responsibility.",
  },
  {
    keywords: ["job", "hire", "hiring", "opportunity", "career", "available"],
    answer:
      "For opportunities, review Vishal's projects and skills on this portfolio, then use the Contact section to reach out. His current availability has not been confirmed here.",
  },
  {
    keywords: ["contact", "email", "reach", "connect", "message"],
    answer:
      "You can reach out through the Contact section of this portfolio. Use the Contact Me link below to jump directly to it.",
  },
];

const fallback =
  "I can help with Vishal's education, skills, projects, training and achievements. Try one of the suggested questions below, or ask about Pay-Zone, Naukri X, PhoolPaudha or BookOurBus.";

function getAnswer(question: string): string {
  const normalized = question.toLowerCase().replace(/[^\w\s/-]/g, " ");

  const match = knowledge.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (match) return match.answer;

  if (normalized.includes("hello") || normalized.includes("hi ") || normalized === "hi") {
    return "Hey! 👋 Welcome to Vishal's portfolio. I'm his portfolio assistant. Ask me about his skills, projects, education or experience.";
  }

  if (normalized.includes("thank")) {
    return "You're welcome! 😊 Feel free to ask me anything else about Vishal's portfolio.";
  }

  return fallback;
}

export default function PortfolioAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hey there! 👋 I'm Vishal's AI portfolio assistant. Ask me about his skills, projects, education or experience. What would you like to know?",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const [visibleQuestions, setVisibleQuestions] = useState(6);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text = input) {
    const trimmed = text.trim();

    if (!trimmed || typing) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
    ]);
    setInput("");
    setShowQuestions(false);
    setTyping(true);

    // Local portfolio Q&A; connect an AI API for generated responses.
    window.setTimeout(() => {
      const answer = getAnswer(trimmed);

      setMessages((previous) => [
        ...previous,
        { role: "assistant", text: answer },
      ]);

      setTyping(false);
    }, 500);
  }

  function resetChat() {
    setMessages([
      {
        role: "assistant",
        text: "Hey there! 👋 I'm Vishal's AI portfolio assistant. Ask me about his skills, projects, education or experience. What would you like to know?",
      },
    ]);
    setInput("");
    setShowQuestions(true);
    setVisibleQuestions(6);
    setTyping(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end sm:bottom-6 sm:right-6">
      {/* Chat window */}
      <div
        aria-hidden={!isOpen}
        className={`mb-4 flex w-[calc(100vw-40px)] max-w-[390px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#080D1B] shadow-[0_24px_100px_rgba(0,0,0,0.65)] transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-8 scale-[0.96] opacity-0"
        }`}
        style={{
          height: "min(610px, calc(100dvh - 115px))",
          transformOrigin: "bottom right",
        }}
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden border-b border-white/[0.08] bg-[#0D1427] px-4 py-4">
          <div className="absolute -right-8 -top-12 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-blue-300">
              <Bot size={23} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#0D1427] bg-emerald-400" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white">
                  Vishal&apos;s AI Assistant
                </h3>
                <Sparkles size={13} className="text-blue-300" />
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Portfolio guide · Ready to help
              </p>
            </div>

            <button
              type="button"
              onClick={resetChat}
              aria-label="Reset conversation"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <RotateCcw size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 [scrollbar-width:thin] [scrollbar-color:#26344f_transparent]">
          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
            <span className="h-px flex-1 bg-white/[0.07]" />
            Portfolio conversation
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          {messages.map((message, index) => (
            <div
              key={`${index}-${message.role}`}
              className={`flex items-end gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Bot size={16} />
                </div>
              )}

              <div
                className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[13px] leading-6 ${
                  message.role === "user"
                    ? "rounded-br-md bg-blue-600 text-white"
                    : "rounded-bl-md border border-white/[0.07] bg-[#111A2D] text-slate-200"
                }`}
              >
                {message.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  /^https?:\/\//.test(part) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-blue-300 underline underline-offset-2"
                    >
                      {part}
                    </a>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}

                {message.role === "assistant" &&
                  message.text.includes("Contact section") && (
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-500/15 px-3 py-2 text-xs font-semibold text-blue-300 transition hover:bg-blue-500/25"
                    >
                      Contact Me <ArrowUpRight size={14} />
                    </a>
                  )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex items-end gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <Bot size={16} />
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/[0.07] bg-[#111A2D] px-4 py-4">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                    style={{ animationDelay: `${dot * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {showQuestions && (
            <div className="pt-2">
              <p className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                <Sparkles size={13} className="text-blue-400" />
                Popular questions
              </p>

              <div className="flex flex-col gap-2">
                {questions.slice(0, visibleQuestions).map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={typing}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2.5 text-left text-xs leading-5 text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:text-white disabled:opacity-50"
                  >
                    <span>{question}</span>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-slate-500 transition group-hover:text-blue-300"
                    />
                  </button>
                ))}
              </div>

              {visibleQuestions < questions.length && (
                <button
                  type="button"
                  onClick={() => setVisibleQuestions(questions.length)}
                  className="mt-3 w-full rounded-lg py-2 text-xs font-medium text-blue-300 transition hover:bg-blue-500/10"
                >
                  Show all 20 questions
                </button>
              )}
            </div>
          )}

          {!showQuestions && !typing && (
            <button
              type="button"
              onClick={() => setShowQuestions(true)}
              className="ml-9 inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-blue-200"
            >
              <MessageCircle size={13} /> Browse suggested questions
            </button>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
          className="shrink-0 border-t border-white/[0.08] bg-[#0B1120] p-3"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#111A2D] p-1.5 pl-3 transition focus-within:border-blue-400/50">
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about my portfolio..."
              aria-label="Type your question"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
            />

            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </div>

          <p className="mt-2 text-center text-[10px] text-slate-600">
            Portfolio Q&A · Answers based on available profile information
          </p>
        </form>
      </div>

      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((previous) => !previous);
          window.setTimeout(() => inputRef.current?.focus(), 300);
        }}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        className={`group relative flex h-14 items-center gap-3 rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-white shadow-[0_8px_35px_rgba(37,99,235,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_45px_rgba(37,99,235,0.55)] ${
          isOpen ? "scale-95" : "animate-none"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 blur-xl transition group-hover:opacity-100" />

        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
          {isOpen ? <Minus size={21} /> : <Bot size={23} />}
          {!isOpen && (
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-emerald-400" />
          )}
        </span>

        <span className="relative pr-1 text-left">
          <span className="block text-sm font-bold">
            {isOpen ? "Close AI" : "Ask AI"}
          </span>
          {!isOpen && (
            <span className="block text-[10px] text-blue-100">
              Ask about my work
            </span>
          )}
        </span>
      </button>
    </div>
  );
}

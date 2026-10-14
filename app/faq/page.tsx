"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Search,
} from "lucide-react";

const categories = [
  "All Questions",
  "About Me",
  "Skills",
  "Projects",
  "Experience",
  "Career",
  "Working Together",
];

const faqs = [
  {
    category: "About Me",
    question: "Who is Vishal Yadav?",
    answer:
      "I'm a developer who enjoys building useful web applications and solving practical problems through technology. I like understanding how things work and turning ideas into working products.",
  },
  {
    category: "About Me",
    question: "What do you do?",
    answer:
      "My work and learning focus on web development, Python, databases, and data analytics. I enjoy working across the frontend and backend to understand the complete application.",
  },
  {
    category: "About Me",
    question: "Where are you based?",
    answer:
      "I'm based in India and open to connecting with people and teams from different locations.",
  },
  {
    category: "About Me",
    question: "What did you study?",
    answer:
      "I completed my Bachelor of Technology in Information Technology from GL Bajaj Institute of Technology and Management, Greater Noida.",
  },
  {
    category: "About Me",
    question: "What interests you outside coding?",
    answer:
      "Sports, teamwork, leadership, learning new things, and taking part in activities that help me grow personally and professionally.",
  },
  {
    category: "About Me",
    question: "What makes you enjoy development?",
    answer:
      "I enjoy starting with a problem, working through the details, and seeing a useful solution take shape. Building something that another person can actually use is especially rewarding.",
  },
  {
    category: "About Me",
    question: "How would you describe your approach to work?",
    answer:
      "I try to understand the requirement first, break the work into manageable steps, and focus on making the result reliable, clear, and easy to use.",
  },

  {
    category: "Skills",
    question: "Which programming languages do you use?",
    answer:
      "My technical background includes Python, JavaScript, and SQL, along with experience using other technologies while building and learning projects.",
  },
  {
    category: "Skills",
    question: "Do you work with React?",
    answer:
      "Yes. I use React to build reusable interface components and interactive user experiences.",
  },
  {
    category: "Skills",
    question: "Do you use Next.js?",
    answer:
      "Yes. I use Next.js for application routing, page layouts, reusable components, and building responsive web experiences.",
  },
  {
    category: "Skills",
    question: "Are you familiar with Tailwind CSS?",
    answer:
      "Yes. I use Tailwind CSS to build responsive layouts and maintain consistent spacing, typography, and styling across pages.",
  },
  {
    category: "Skills",
    question: "Do you work with Python?",
    answer:
      "Yes. Python is one of my core technical skills. I've used it for programming, data processing, analytics, and machine learning projects.",
  },
  {
    category: "Skills",
    question: "What databases have you worked with?",
    answer:
      "My experience includes MySQL and MongoDB. I use relational and document databases depending on the needs of a project.",
  },
  {
    category: "Skills",
    question: "Can you work with APIs?",
    answer:
      "I work with API integrations and understand how frontend applications communicate with backend services. I also consider loading states, validation, and error handling.",
  },
  {
    category: "Skills",
    question: "Do you have data analytics skills?",
    answer:
      "Yes. My analytics toolkit includes SQL, Excel, Python, Pandas, NumPy, and Power BI for working with data and presenting useful findings.",
  },
  {
    category: "Skills",
    question: "Have you used Power BI?",
    answer:
      "Yes. I've worked with Power BI for data visualization and reporting, including presenting information in a way that is easier to understand.",
  },
  {
    category: "Skills",
    question: "Do you understand responsive design?",
    answer:
      "Yes. I build layouts with different screen sizes in mind, including mobile phones, tablets, laptops, and larger displays.",
  },

  {
    category: "Projects",
    question: "What can I find in your portfolio?",
    answer:
      "My portfolio brings together selected development, database, and analytics work. Each project is an opportunity to show how I approach a problem and build a solution.",
  },
  {
    category: "Projects",
    question: "What is BookOurBus?",
    answer:
      "BookOurBus is a bus-booking web project focused on presenting routes, offers, and booking-related information through a familiar travel interface.",
  },
  {
    category: "Projects",
    question: "What is Ranapay- Giftcard?",
    answer:
      "Ranapay- Giftcard is a gift card marketplace concept focused on product discovery, brand browsing, and a straightforward shopping experience.",
  },
  {
    category: "Projects",
    question: "What is PhoolPaudha?",
    answer:
      "PhoolPaudha is a plant-store project designed around browsing plants, exploring categories, and presenting products in a clear, responsive storefront.",
  },
  {
    category: "Projects",
    question: "What is NaukriX?",
    answer:
      "NaukriX is a job portal administration project that includes interfaces for managing jobs, applications, interviews, and team-related information.",
  },
  {
    category: "Projects",
    question: "Have you built analytics projects?",
    answer:
      "Yes. My project work includes sales reporting and data analysis, using tools such as Python, SQL, Excel, and Power BI to explore and present information.",
  },
  {
    category: "Projects",
    question: "Have you worked on machine learning?",
    answer:
      "I've explored machine learning through projects such as Titanic survival prediction. This work helped me practise preparing data, training models, and evaluating results.",
  },
  {
    category: "Projects",
    question: "How do you choose a project?",
    answer:
      "I look for a problem worth solving, a useful set of features, and an opportunity to learn. I also consider whether the finished project can be demonstrated clearly.",
  },
  {
    category: "Projects",
    question: "Can I see your source code?",
    answer:
      "You can explore the repositories available on my GitHub profile. If a particular project has a public repository, its source code can be reviewed there.",
  },
  {
    category: "Projects",
    question: "Are all portfolio projects live?",
    answer:
      "Not necessarily. Some projects may be demonstrations or development work. Check each project's available links to see whether a live version or source repository is provided.",
  },
  {
    category: "Projects",
    question: "Can you explain how a project works?",
    answer:
      "Yes. I'm happy to discuss a project's purpose, the technologies involved, important implementation decisions, and the challenges encountered while building it.",
  },

  {
    category: "Experience",
    question: "Have you worked in a team?",
    answer:
      "Yes. My project work and sports leadership activities have given me experience collaborating with others, coordinating tasks, and working towards shared goals.",
  },
  {
    category: "Experience",
    question: "What did sports leadership teach you?",
    answer:
      "Being involved in sports leadership taught me the importance of communication, discipline, preparation, accountability, and supporting teammates.",
  },
  {
    category: "Experience",
    question: "Have you participated in competitions?",
    answer:
      "Yes. I've participated in Kho-Kho competitions at zonal and state levels. These experiences helped me develop teamwork and persistence.",
  },
  {
    category: "Experience",
    question: "Do you have internship experience?",
    answer:
      "My background includes training and internship exposure related to Python, machine learning, and data analytics. I continue to build practical skills through projects.",
  },
  {
    category: "Experience",
    question: "How do you handle a technical challenge?",
    answer:
      "I reproduce the issue, read the relevant error messages, narrow down possible causes, and test a fix. I prefer understanding the reason behind a problem rather than applying a guess.",
  },
  {
    category: "Experience",
    question: "How do you approach learning a new technology?",
    answer:
      "I start with the fundamentals, follow the official documentation where possible, and build a small practical example before applying the technology to a larger project.",
  },
  {
    category: "Experience",
    question: "How do you approach feedback?",
    answer:
      "I try to understand the reason behind the feedback, ask questions when something is unclear, and use it to improve the work.",
  },

  {
    category: "Career",
    question: "What kind of role are you looking for?",
    answer:
      "I'm interested in opportunities where I can contribute to software development, learn from experienced teammates, and build useful applications.",
  },
  {
    category: "Career",
    question: "Are you open to full-stack development?",
    answer:
      "Yes. I'm interested in working across frontend interfaces, backend logic, API integration, and databases as part of a complete application.",
  },
  {
    category: "Career",
    question: "Are you open to Python-related roles?",
    answer:
      "Yes. Python development and related opportunities are areas of interest, especially where I can solve practical problems and continue improving my skills.",
  },
  {
    category: "Career",
    question: "Are you open to data analyst roles?",
    answer:
      "Yes. My experience with SQL, Excel, Python, and Power BI makes data analytics another area I'm interested in exploring professionally.",
  },
  {
    category: "Career",
    question: "Are you open to remote opportunities?",
    answer:
      "I'm open to discussing remote and other suitable working arrangements, depending on the role and its requirements.",
  },
  {
    category: "Career",
    question: "Can recruiters contact you?",
    answer:
      "Absolutely. Recruiters and hiring teams can reach me through the email address or LinkedIn profile listed on this website.",
  },
  {
    category: "Career",
    question: "What do you want to improve next?",
    answer:
      "I want to strengthen my software engineering fundamentals, write more maintainable code, improve application architecture, and gain experience working on real products.",
  },

  {
    category: "Working Together",
    question: "Can we discuss a project idea?",
    answer:
      "Of course. Send a short description of the idea, the problem you want to solve, and what you would like to achieve. We can start by discussing the requirements.",
  },
  {
    category: "Working Together",
    question: "How should I contact you?",
    answer:
      "Use the contact form on this website or email me directly. Including a clear subject and a few details about your enquiry helps me understand your message.",
  },
  {
    category: "Working Together",
    question: "What information should a project enquiry include?",
    answer:
      "A brief overview, your main goals, important features, expected timeline, and any existing designs or technical requirements are a useful starting point.",
  },
  {
    category: "Working Together",
    question: "Can you work on an existing application?",
    answer:
      "Potentially, yes. I'd first need to understand the current application, the requested changes, the technology stack, and the expected outcome.",
  },
  {
    category: "Working Together",
    question: "Can you help improve an existing website?",
    answer:
      "I can discuss improvements to layout, responsiveness, usability, component structure, and frontend functionality once I understand the current website and its needs.",
  },
  {
    category: "Working Together",
    question: "How do you communicate during a project?",
    answer:
      "Clear and timely communication matters to me. I prefer agreeing on the requirements early, sharing progress, and raising questions before assumptions become problems.",
  },
  {
    category: "Working Together",
    question: "How do you approach project deadlines?",
    answer:
      "I break work into smaller tasks, identify the essential features first, and keep the scope realistic. If something affects the timeline, I believe it should be communicated early.",
  },
  {
    category: "Working Together",
    question: "Can you guarantee a delivery date or price?",
    answer:
      "Not before understanding the scope. A realistic estimate depends on the requirements, complexity, existing code, dependencies, and expected deliverables.",
  },
  {
    category: "Working Together",
    question: "What happens after I send a message?",
    answer:
      "Your message will open in your default email application with the details prepared. You still need to send the email from that application.",
  },
  {
    category: "Working Together",
    question: "Where can I follow your work?",
    answer:
      "You can visit my GitHub profile to explore available code and my LinkedIn profile to connect professionally. Both links are available on this website.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#070910] text-white">
      <section className="border-b border-white/[0.08] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium text-blue-300">Frequently asked questions</p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A few things you
            <span className="block text-white/45">might want to know.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Learn more about my background, projects, skills, and how we might
            work together. Can&apos;t find what you&apos;re looking for? Feel
            free to get in touch.
          </p>

          <div className="relative mt-8 max-w-xl">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search questions..."
              aria-label="Search frequently asked questions"
              className="w-full rounded-xl border border-white/10 bg-white/[0.035] py-4 pl-12 pr-4 text-sm outline-none transition placeholder:text-white/35 focus:border-blue-400/50"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`rounded-full border px-4 py-2.5 text-sm transition ${
                activeCategory === category
                  ? "border-blue-400/40 bg-blue-500/10 text-blue-200"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-sm text-white/45">
            {filteredFaqs.length} questions
          </p>

          {openIndex !== -1 && filteredFaqs.length > 0 && (
            <button
              type="button"
              onClick={() =>
                setOpenIndex(openIndex === -1 ? 0 : -1)
              }
              className="text-sm text-blue-300 transition hover:text-white"
            >
              Close answer
            </button>
          )}
        </div>

        <div className="mt-3 divide-y divide-white/[0.09] border-y border-white/[0.09]">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="flex min-w-0 items-start gap-4">
                    <span className="mt-0.5 text-xs tabular-nums text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <span className="block text-base font-medium leading-6 text-white/90 sm:text-lg">
                        {faq.question}
                      </span>
                      <span className="mt-1.5 block text-xs text-white/35">
                        {faq.category}
                      </span>
                    </span>
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-white/45 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-300" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pl-8 sm:pl-10">
                    <p className="max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg font-medium">No matching questions</p>
              <p className="mt-2 text-sm text-white/45">
                Try another search or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Questions");
                  setOpenIndex(0);
                }}
                className="mt-5 text-sm text-blue-300 hover:text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Still have a question?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
              If there&apos;s something else you&apos;d like to know, send me
              a message and tell me what&apos;s on your mind.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#070910] transition hover:bg-blue-100 sm:self-auto"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
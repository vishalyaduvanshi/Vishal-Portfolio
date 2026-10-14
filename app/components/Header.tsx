"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#030711]/90 backdrop-blur-2xl">
      {/* Neon background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-24 w-64 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-20 top-0 h-24 w-64 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Premium Name Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Vishal Yadav - Home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-blue-500/10 shadow-[0_0_18px_rgba(139,92,246,0.12)] transition duration-300 group-hover:border-violet-300/60 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]">
            <span className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-transparent" />
            <span className="relative text-lg font-black tracking-tighter text-white">
              V<span className="text-violet-400">Y</span>
            </span>
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-white transition group-hover:text-violet-100 sm:text-xl">
              Vishal{" "}
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                Yadav
              </span>
            </span>

            <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-[10px]">
              Developer &amp; Creator
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.025] p-1.5 lg:flex"
        >
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-4 py-2.5 text-[15px] font-medium transition-all duration-300 ${
                  active
                    ? "border border-violet-400/40 bg-violet-600/30 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    : "border border-transparent text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Let's Talk */}
        <Link
          href="/contact"
          className="group hidden items-center gap-3 rounded-full border border-violet-500 px-5 py-2.5 text-base font-semibold text-white transition duration-300 hover:bg-violet-600/20 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] sm:flex"
        >
          Let&apos;s Talk
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#050a17] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base transition ${
                    active
                      ? "bg-violet-500/15 text-violet-300"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-base font-semibold text-white"
            >
              Let&apos;s Talk
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
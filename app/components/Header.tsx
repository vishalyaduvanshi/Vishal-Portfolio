"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#030711]/95 backdrop-blur-md">
      {/* Header background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-24 w-64 rounded-full bg-blue-600/[0.06] blur-3xl" />
        <div className="absolute -right-20 top-0 h-24 w-64 rounded-full bg-violet-600/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-8 lg:px-14">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Vishal Yadav - Home"
          className="group flex min-w-0 shrink-0 items-center gap-2.5"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-[#111426] transition-colors duration-200 group-hover:border-violet-300/60">
            <span className="text-lg font-black tracking-tighter text-white">
              V<span className="text-violet-400">Y</span>
            </span>
          </span>

          <span className="flex min-w-0 flex-col leading-none">
            <span className="whitespace-nowrap text-base font-extrabold tracking-tight text-white sm:text-xl">
              Vishal <span className="text-violet-300">Yadav</span>
            </span>

            <span className="mt-1.5 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[10px] sm:tracking-[0.24em]">
              Developer &amp; Creator
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.025] p-1.5 xl:flex"
        >
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "border border-violet-400/30 bg-violet-600/20 text-white"
                    : "border border-transparent text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact */}
        <Link
          href="/contact"
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-violet-400/40 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-600/15 sm:flex"
        >
          Let's Talk
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="relative z-[70] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-white/15 bg-[#111426] text-white transition-colors duration-200 hover:bg-white/10 xl:hidden"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300 ease-out xl:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[60] flex h-[100dvh] max-h-[100dvh] w-[min(86vw,360px)] flex-col overflow-hidden border-l border-white/10 bg-[#080C16] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ willChange: "transform" }}
      >
        {/* Drawer Header */}
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/10 px-5 sm:h-[76px]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="text-base font-bold text-white"
          >
            Vishal <span className="text-violet-300">Yadav</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            tabIndex={menuOpen ? 0 : -1}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Explore
          </p>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-200 ${
                    active
                      ? "bg-violet-500/15 text-white"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 20}ms` : "0ms",
                  }}
                >
                  <span>{item.label}</span>

                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      active
                        ? "text-violet-300"
                        : "text-slate-600 group-hover:translate-x-0.5 group-hover:text-slate-300"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Fixed Bottom CTA */}
        <div className="shrink-0 border-t border-white/10 bg-[#080C16] px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
          <Link
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-violet-500"
          >
            Let's Talk
            <ArrowRight size={17} />
          </Link>

          <div className="mt-3 text-center">
            <p className="text-xs font-medium text-slate-300">
              Vishal Yadav
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Developer &amp; Creator
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
}
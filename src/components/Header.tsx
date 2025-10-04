"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-max py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            הילה
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              אודות הילה
            </Link>
            <Link
              href="#reset"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              קורס RESET
            </Link>
            <Link
              href="#communication-course"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              קורס תקשור
            </Link>
            <Link
              href="#personal-reading"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              הזמנת תקשור אישי
            </Link>
            <Link
              href="#blog"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              בלוג
            </Link>
            <Link
              href="#appointment"
              className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
            >
              קביעת פגישה
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href="#appointment"
            className="btn btn-primary hidden md:inline-flex"
          >
            קביעת פגישה
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[var(--lilac-2)]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                אודות הילה
              </Link>
              <Link
                href="#reset"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס RESET
              </Link>
              <Link
                href="#communication-course"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס תקשור
              </Link>
              <Link
                href="#personal-reading"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                הזמנת תקשור אישי
              </Link>
              <Link
                href="#blog"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                בלוג
              </Link>
              <Link
                href="#appointment"
                className="text-[var(--ink)] hover:text-[var(--lilac-1)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קביעת פגישה
              </Link>
              <a href="#appointment" className="btn btn-primary w-full mt-4">
                קביעת פגישה
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

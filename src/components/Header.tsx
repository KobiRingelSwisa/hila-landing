"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import hilaLogo from "../../public/images/hila-logo.png";

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
        isScrolled
          ? "bg-gradient-to-b from-deep-purple via-deep-purple to-deep-purple/95 backdrop-blur-md shadow-lg shadow-deep-purple/50"
          : "bg-transparent"
      }`}
      style={
        isScrolled
          ? {
              background:
                "linear-gradient(135deg, var(--deep-purple) 0%, var(--purple-blue) 100%)",
            }
          : {}
      }
    >
      <div className="container-max py-6">
        {/* Header Content - Logo and Text */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          {/* Logo - Center */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <div
                className={`${
                  isScrolled 
                    ? "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" 
                    : "w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
                } relative transition-all duration-300`}
              >
                <Image
                  src={hilaLogo}
                  alt="הילה תחכמוני - לוגו"
                  width={isScrolled ? 96 : 128}
                  height={isScrolled ? 96 : 128}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-shrink-0 md:hidden absolute left-4 top-6">
            <button
              className="p-3 rounded-lg bg-purple-900/30 backdrop-blur-sm hover:bg-purple-900/50 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="תפריט"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <div
                  className={`h-0.5 w-full bg-broken-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`h-0.5 w-full bg-broken-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`h-0.5 w-full bg-broken-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-wrap">
          <Link
            href="/about"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            קצת עליי
          </Link>
          <Link
            href="/reset"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            קורס RESET
          </Link>
          <Link
            href="/communication-course"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            קורס תקשור
          </Link>
          <Link
            href="/personal-reading"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            הזמנת תקשור אישי
          </Link>
          <Link
            href="/blog"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            בלוג
          </Link>
          <Link
            href="/appointment"
            className="text-broken-white hover:text-gold-1 transition-colors font-medium text-sm lg:text-base whitespace-nowrap"
          >
            קביעת פגישה
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-broken-white/20 animate-fade-in bg-gradient-to-b from-deep-purple via-purple-blue to-deep-purple rounded-lg">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/about"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קצת עליי
              </Link>
              <Link
                href="/reset"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס RESET
              </Link>
              <Link
                href="/communication-course"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס תקשור
              </Link>
              <Link
                href="/personal-reading"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                הזמנת תקשור אישי
              </Link>
              <Link
                href="/blog"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                בלוג
              </Link>
              <Link
                href="/appointment"
                className="text-broken-white hover:text-gold-1 transition-colors font-medium text-lg py-2 px-4 hover:bg-purple-900/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קביעת פגישה
              </Link>
              <Link 
                href="/appointment" 
                className="btn btn-primary w-full mt-2 text-center text-lg py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קבעו פגישה עכשיו
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

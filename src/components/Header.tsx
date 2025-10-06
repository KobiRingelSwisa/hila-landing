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
          ? "bg-deep-purple/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-max py-6">
        {/* Header Content - Logo and Text */}
        <div className="flex items-center justify-between mb-6">
          {/* Logo - Right Side */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex items-center">
              <div
                className={`${
                  isScrolled ? "w-24 h-24" : "w-32 h-32"
                } relative transition-all duration-300`}
              >
                <Image
                  src={hilaLogo}
                  alt="הילה תחכמוני - לוגו"
                  width={isScrolled ? 96 : 128}
                  height={isScrolled ? 96 : 128}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Central Text Block */}
          <div className="flex-1 text-center px-8">
            <h1
              className={`text-3xl md:text-4xl font-bold mb-2 gradient-text ${
                isScrolled ? "text-2xl md:text-3xl" : ""
              } transition-all duration-300`}
            >
              הילה תחכמוני
            </h1>
            <p
              className={`text-lg md:text-xl gold-text-on-dark ${
                isScrolled ? "text-base md:text-lg" : ""
              } transition-all duration-300`}
            >
              תקשור, ריפוי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית
            </p>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-shrink-0 md:hidden">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          <Link
            href="/about"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            קצת עליי
          </Link>
          <Link
            href="/reset"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            קורס RESET
          </Link>
          <Link
            href="/communication-course"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            קורס תקשור
          </Link>
          <Link
            href="/personal-reading"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            הזמנת תקשור אישי
          </Link>
          <Link
            href="/blog"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            בלוג
          </Link>
          <Link
            href="/appointment"
            className={`${
              isScrolled ? "text-broken-white" : "text-broken-white"
            } hover:text-gold-1 transition-colors font-medium`}
          >
            קביעת פגישה
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 border-t ${
              isScrolled ? "border-broken-white/20" : "border-broken-white/20"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קצת עליי
              </Link>
              <Link
                href="/reset"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס RESET
              </Link>
              <Link
                href="/communication-course"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קורס תקשור
              </Link>
              <Link
                href="/personal-reading"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                הזמנת תקשור אישי
              </Link>
              <Link
                href="/blog"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                בלוג
              </Link>
              <Link
                href="/appointment"
                className={`${
                  isScrolled ? "text-broken-white" : "text-broken-white"
                } hover:text-gold-1 transition-colors font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                קביעת פגישה
              </Link>
              <Link href="/appointment" className="btn btn-primary w-full mt-4">
                קביעת פגישה
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

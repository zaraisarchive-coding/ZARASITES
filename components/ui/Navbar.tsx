"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full mx-4 sm:mx-auto py-2" : ""
        }`}
      >
        <a href="#hero" className="font-display italic text-lg text-ink-900">
          F. Az Zahra
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-blue rounded-full"
                />
              )}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/6281230139086"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center rounded-full bg-navy-900 text-white text-sm font-ui font-medium px-5 py-2 hover:bg-accent-blue transition-colors"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
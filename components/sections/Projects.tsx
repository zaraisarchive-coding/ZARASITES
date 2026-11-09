"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white/50">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        align="center"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.1}
            className={p.size === "lg" ? "md:col-span-2" : ""}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden bg-navy-800 text-white ${
                p.size === "lg" ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              {/* gradient (cadangan kalau gambar tidak ada) */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-blush-500/30" />

              {/* gambar tampilan utama web */}
              {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              {/* label bawah (dengan gradasi supaya teks tetap terbaca) */}
              <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-navy-900/90 to-transparent">
                <h3 className="font-ui font-semibold text-xl">{p.title}</h3>
                <p className="text-sm text-white/70">{p.role}</p>
              </div>

              {/* overlay saat hover */}
              <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-ui font-semibold text-xl mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">{p.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-ui font-medium bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-ui font-medium bg-accent-blue hover:bg-blue-500 transition-colors rounded-full px-4 py-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}

        {/* Coming Soon card */}
        <Reveal delay={projects.length * 0.1}>
          <div className="rounded-3xl aspect-[4/3] border-2 border-dashed border-blush-400/40 flex flex-col items-center justify-center gap-2 text-ink-700/50">
            <Sparkles className="w-6 h-6" />
            <span className="font-display italic text-lg">Coming Soon</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
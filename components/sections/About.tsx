"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* ambient blur shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blush-200/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: floating illustration card */}
        <Reveal>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass rounded-3xl p-4 aspect-square relative overflow-hidden"
          >
            <Image
              src="/profile.png"
              alt="Fathimah Az Zahra"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute top-4 right-4 glass rounded-2xl px-4 py-2 text-xs font-ui font-medium text-navy-900">
              UI/UX &amp; Code
            </div>
          </motion.div>
        </Reveal>

        {/* Right: content */}
        <div>
          <SectionHeading
            eyebrow="Get to know me"
            title="About Me"
            description={
              "Saya adalah seorang Junior Web Developer yang memiliki ketertarikan dalam pengembangan website modern dan UI/UX Design. Saya senang mengubah ide menjadi solusi digital melalui teknologi web serta terus mengembangkan kemampuan di bidang pemrograman."
            }
          />

          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-5">
                  {s.isText ? (
                    <span className="font-ui font-bold text-2xl text-navy-900">
                      Open
                    </span>
                  ) : (
                    <Counter to={s.value} suffix={s.suffix} />
                  )}
                  <p className="text-sm text-ink-700/70 mt-1">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

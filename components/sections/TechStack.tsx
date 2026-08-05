"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/data";

const POSITIONS = [
  { top: "10%", left: "12%", delay: 0 },
  { top: "22%", left: "55%", delay: 0.6 },
  { top: "55%", left: "8%", delay: 1.1 },
  { top: "68%", left: "40%", delay: 0.3 },
  { top: "15%", left: "80%", delay: 0.9 },
  { top: "48%", left: "68%", delay: 1.4 },
  { top: "78%", left: "72%", delay: 0.2 },
  { top: "40%", left: "30%", delay: 1.7 },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="section-pad bg-navy-gradient text-white relative overflow-hidden"
    >
      <Reveal className="text-center relative z-10">
        <span className="eyebrow text-blush-400">Tools of the craft</span>
        <h2 className="font-ui font-semibold text-3xl sm:text-4xl mt-3">
          Tech Stack
        </h2>
      </Reveal>

      <div className="relative h-[380px] max-w-4xl mx-auto mt-6">
        {techStack.map((tech, i) => {
          const pos = POSITIONS[i % POSITIONS.length];
          return (
            <motion.div
              key={tech}
              style={{ position: "absolute", top: pos.top, left: pos.left }}
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              }}
            >
              <div className="glass-navy rounded-2xl px-5 py-3 text-sm font-ui font-medium text-white/90 whitespace-nowrap">
                {tech}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

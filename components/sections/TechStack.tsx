"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/data";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiSupabase,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECH_ICONS: Record<string, { icon: any; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#0f172a" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Git: { icon: SiGit, color: "#F05032" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
};

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
      className="section-pad text-ink-900 relative overflow-hidden"
    >
      <Reveal className="text-center relative z-10">
        <span className="eyebrow text-blush-500">Tools of the craft</span>
        <h2 className="font-ui font-semibold text-3xl sm:text-4xl mt-3">
          Tech Stack
        </h2>
      </Reveal>

      <div className="relative h-[380px] max-w-4xl mx-auto mt-6">
        {techStack.map((tech, i) => {
          const pos = POSITIONS[i % POSITIONS.length];
          const item = TECH_ICONS[tech];
          const Icon = item?.icon;
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
              <div className="glass rounded-2xl px-5 py-3 text-sm font-ui font-medium text-ink-900 whitespace-nowrap flex items-center gap-2">
                {Icon && <Icon size={18} color={item.color} />}
                <span>{tech}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
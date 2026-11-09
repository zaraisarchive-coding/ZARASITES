"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  HeartHandshake,
  Braces,
  Palette,
  GitBranch,
  Github,
  MonitorPlay,
  FileImage,
  Puzzle,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

const ICONS: Record<string, any> = {
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
  TypeScript: Braces,
  "Next.js": Sparkles,
  "Node.js": Server,
  Supabase: Server,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": MonitorPlay,
  Figma: Palette,
  Canva: FileImage,
  "Problem Solving": Puzzle,
  Teamwork: Users,
  Communication: MessageCircle,
  Adaptability: HeartHandshake,
};

const GROUP_ICONS: Record<string, any> = {
  Frontend: Code2,
  Backend: Server,
  Tools: Wrench,
  "Soft Skills": HeartHandshake,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden !bg-[#FFC9DE]"
    >
      <SectionHeading
        eyebrow="What I work with"
        title="Skills"
        align="center"
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {skillGroups.map((group, gi) => {
          const GroupIcon = GROUP_ICONS[group.title];
          return (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="glass rounded-3xl p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <GroupIcon className="w-5 h-5 text-accent-blue" />
                  <h3 className="font-ui font-semibold text-ink-900">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => {
                    const Icon = ICONS[item] ?? Sparkles;
                    return (
                      <motion.div
                        key={item}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-white/70 hover:shadow-glass hover:bg-white transition-all cursor-default"
                      >
                        <motion.span
                          whileHover={{ rotate: 15 }}
                          className="text-accent-blue"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.span>
                        <span className="text-sm text-ink-700 font-medium">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
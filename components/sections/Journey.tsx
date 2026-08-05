"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/lib/data";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const height = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="journey" className="section-pad">
      <SectionHeading eyebrow="How I got here" title="My Journey" align="center" />

      <div ref={ref} className="max-w-2xl mx-auto mt-16 relative">
        {/* base line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-blush-200" />
        {/* animated progress line */}
        <motion.div
          style={{ scaleY: height }}
          className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-accent-blue origin-top"
        />

        <div className="flex flex-col gap-10">
          {journey.map((step, i) => (
            <Reveal key={step} delay={i * 0.05}>
              <div className="flex items-center gap-6 relative">
                <span className="w-4 h-4 rounded-full bg-white border-2 border-accent-blue shrink-0 z-10" />
                <div className="glass rounded-2xl px-5 py-3 flex-1">
                  <span className="font-ui font-medium text-ink-900">
                    {step}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="section-pad relative overflow-hidden !bg-[#FFC9DE]"
    >
      <SectionHeading eyebrow="Proof of learning" title="Certificates" align="center" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-14">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <motion.button
              onClick={() => setActive(i)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative w-full aspect-[3/4] rounded-2xl bg-white shadow-glass overflow-hidden text-left"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-ui font-medium text-white bg-white/10 rounded-full px-3 py-1.5">
                  <Eye className="w-3.5 h-3.5" /> Preview
                </span>
              </div>
              <p className="absolute bottom-0 w-full text-xs font-medium text-ink-900 bg-white/90 px-2 py-1.5 text-center">
                {c.title}
              </p>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm z-[70] flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-4 max-w-lg w-full aspect-[3/4] relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-glass flex items-center justify-center text-ink-700/70 hover:text-ink-900"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={certificates[active].image}
                  alt={certificates[active].title}
                  fill
                  className="object-contain bg-blush-50"
                />
              </div>
              <p className="text-center font-ui font-medium text-ink-900 mt-3">
                {certificates[active].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
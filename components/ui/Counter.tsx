"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000 });

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, to, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.floor(v)}${suffix}`;
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <motion.span ref={ref} className="font-ui font-bold text-3xl text-navy-900">
      0{suffix}
    </motion.span>
  );
}

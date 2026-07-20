"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useInView } from "framer-motion";


interface MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, duration = 0.5 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, delay = 0, duration = 0.5 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, delay = 0, duration = 0.5 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, delay = 0, duration = 0.6 }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleHover({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  
  const numStr = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const targetNum = parseInt(numStr, 10) || 0;
  
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (inView && targetNum > 0) {
      let start = 0;
      const end = targetNum;
      const duration = 1800; // 1.8 seconds
      const startTime = performance.now();

      const run = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quadratic
        const ease = progress * (2 - progress);
        const current = Math.floor(ease * (end - start) + start);
        
        setCurrentVal(current);

        if (progress < 1) {
          requestAnimationFrame(run);
        }
      };

      requestAnimationFrame(run);
    }
  }, [inView, targetNum]);

  return (
    <span ref={ref}>
      {currentVal}
      {suffix}
    </span>
  );
}


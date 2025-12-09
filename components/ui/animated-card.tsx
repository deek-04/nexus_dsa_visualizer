/**
 * NEXUS - Animated Card Component
 * Card with entrance and hover animations
 */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className = "" }: AnimatedCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay
    }}
    whileHover={{
      y: -8,
      transition: { duration: 0.2 }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

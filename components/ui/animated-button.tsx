/**
 * NEXUS - Animated Button Component
 * Button with press and hover effects
 */
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
}

export const AnimatedButton = ({ children, className = "", ...props }: AnimatedButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 10
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);

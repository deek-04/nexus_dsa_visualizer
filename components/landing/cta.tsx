/**
 * NEXUS - Call to Action Component
 * Encourages users to explore visualizers
 */
"use client";

import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTA = () => (
  <section className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <motion.div 
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-16 border-2 border-primary/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <div className="relative flex flex-col items-center text-center gap-8">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-heading tracking-tighter bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Begin Your Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transform your understanding of data structures with NEXUS. Experience the power of visual learning through elegant, interactive demonstrations.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/visualizer">
              <RainbowButton className="gap-4 text-lg px-8 py-6">
                Launch Visualizers <MoveRight className="w-5 h-5 ml-2" />
              </RainbowButton>
            </Link>
          </motion.div>
        </div>

        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 h-96 w-96 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" />
      </motion.div>
    </div>
  </section>
); 

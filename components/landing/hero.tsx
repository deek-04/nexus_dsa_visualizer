/**
 * NEXUS - Hero Component
 * Landing page hero section with brand messaging
 */
"use client";

import { MoveRight } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => (
  <div className="relative w-full py-20 lg:py-40 overflow-hidden">
    <div className="absolute inset-0">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
      />
    </div>
    
    {/* Enhanced gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

    <div className="container mx-auto relative">
      <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
        <div className="flex gap-6 flex-col">
          <div className="flex gap-5 flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold font-heading bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent"
            >
              NEXUS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-medium"
            >
              Master data structures through interactive visualization. Transform complex algorithms into intuitive visual experiences with elegant, real-time animations.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-row gap-4 pt-2"
          >
            <Link href="/visualizer">
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <RainbowButton>
                  Explore Visualizers <MoveRight className="hidden sm:block w-4 h-4" />
                </RainbowButton>
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative aspect-video rounded-lg overflow-hidden border shadow-2xl shadow-primary/10 ring-1 ring-primary/10"
        >
          <Image
            src="/ds-bst.png"
            alt="Visualizer Preview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  </div>
); 
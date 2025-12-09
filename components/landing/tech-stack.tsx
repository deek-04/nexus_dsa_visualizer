/**
 * NEXUS - Tech Stack Component
 * Displays the technology stack powering NEXUS
 */
"use client";

import { Code2, Cpu, Gauge, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const techItems = [
  { icon: Code2, title: "Next.js 15", description: "Blazing-fast React framework with server-side rendering", color: "text-primary" },
  { icon: Cpu, title: "React Flow", description: "Powerful node-based visualization engine", color: "text-secondary" },
  { icon: Gauge, title: "Framer Motion", description: "Fluid animations with spring physics", color: "text-accent" },
  { icon: Database, title: "Tailwind CSS", description: "Utility-first styling with custom theme", color: "text-primary" },
];

export const TechStack = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div 
          className="flex gap-4 flex-col items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <Badge variant="outline">Technology</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-heading text-left">
              Modern Stack, Elegant Experience
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              NEXUS leverages cutting-edge web technologies to deliver smooth, responsive visualizations with beautiful animations.
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.div 
            className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {techItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex gap-0 flex-col justify-between p-6 border-2 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/30"
                >
                  <Icon className={`w-6 h-6 mb-10 ${item.color}`} />
                  <h2 className="text-2xl tracking-tighter max-w-xl text-left font-heading">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
); 

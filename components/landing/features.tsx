/**
 * NEXUS - Features Component
 * Showcases data structure visualizers with interactive previews
 */
"use client";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Stacks",
    description: "Watch LIFO operations come alive with push and pop animations that reveal the elegant simplicity of stack-based computing",
    image: "/ds-st.png",
    url: "/visualizer/stack"
  },
  {
    title: "Queues",
    description: "Experience FIFO principles through smooth enqueue and dequeue visualizations that demonstrate real-world queue behavior",
    image: "/ds-q.png",
    url: "/visualizer/queue"
  },
  {
    title: "Linked Lists",
    description: "Explore pointer-based structures with dynamic node connections that illustrate the power of linked data",
    image: "/ds-ll.png",
    url: "/visualizer/linked-list"
  },
  {
    title: "Binary Search Trees",
    description: "Discover hierarchical data organization through interactive BST operations with instant visual feedback",
    image: "/ds-bst.png",
    url: "/visualizer/binary-tree"
  },
  {
    title: "AVL Trees",
    description: "Master self-balancing trees with rotation animations that maintain O(log n) performance guarantees",
    image: "/ds-avl.png",
    url: "/visualizer/avl-tree"
  },
  {
    title: "Heaps",
    description: "Understand priority queues through heap property visualizations and efficient heapify operations",
    image: "/ds-heap.png",
    url: "/visualizer/heap"
  },
  {
    title: "Expression Conversion",
    description: "Transform infix expressions to postfix notation with step-by-step stack-based conversion animations",
    image: "/ds-infix-to-postfix.png",
    url: "/visualizer/stack-applications"
  },
  {
    title: "Message Queue System",
    description: "Simulate asynchronous message processing with producer-consumer patterns and real-time queue dynamics",
    image: "/ds-mq.png",
    url: "/visualizer/queue-applications"
  },
  {
    title: "Polynomial Operations",
    description: "Visualize polynomial multiplication using linked list representation with term-by-term computation flow",
    image: "/ds-polynomial-multiplication.png",
    url: "/visualizer/polynomial"
  },
  {
    title: "Huffman Encoding",
    description: "Learn data compression through frequency-based tree construction and variable-length prefix code generation",
    image: "/ds-huffman.png",
    url: "/visualizer/huffman"
  },
  {
    title: "Shortest Path Finding",
    description: "Watch Dijkstra's algorithm find optimal paths through weighted graphs with priority queue-driven exploration",
    image: "/ds-dijkstra.png",
    url: "/visualizer/dijkstra"
  },
];

interface SelectedFeature {
  title: string;
  description: string;
  image: string;
  url: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="secondary">Visualizers</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-heading text-left">
                Explore Core Concepts
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Dive into fundamental data structures and algorithms with interactive visualizations that make complex concepts intuitive and engaging.
              </p>
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-3 cursor-pointer group"
                onClick={() => setSelectedFeature(feature)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3 ring-2 ring-primary/20 group-hover:ring-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedFeature?.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-2">
              {selectedFeature?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="relative aspect-video rounded-lg overflow-hidden my-4 border">
            {selectedFeature && (
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <DialogFooter className="sm:justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => setSelectedFeature(null)}
            >
              Close Preview
            </Button>
            <Button asChild>
              <Link href={selectedFeature?.url ?? "#"} className="gap-2">
                Try it out <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

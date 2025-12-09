/**
 * NEXUS - Visualizer Hub Page
 * Central hub for accessing all data structure visualizers
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Binary, TreePine, Box, List, ArrowLeftRight, Calculator, MessageSquare, Hash, ArrowRightLeft } from "lucide-react"
import Link from "next/link"

const sections = {
  dataStructures: [
    {
      name: "Linked List",
      description: "Explore dynamic node-based structures with pointer connections. Watch insertions, deletions, and traversals unfold.",
      href: "/visualizer/linked-list",
      icon: List,
    },
    {
      name: "Stack",
      description: "Master LIFO principles through animated push and pop operations. See the stack grow and shrink in real-time.",
      href: "/visualizer/stack",
      icon: ArrowLeftRight,
    },
    {
      name: "Queue",
      description: "Understand FIFO behavior with smooth enqueue and dequeue animations. Perfect for learning queue mechanics.",
      href: "/visualizer/queue",
      icon: ArrowLeftRight,
    },
    {
      name: "Binary Search Tree",
      description: "Discover hierarchical data organization with BST properties. Visualize insertions, searches, and tree traversals.",
      href: "/visualizer/binary-tree",
      icon: Binary,
    },
    {
      name: "AVL Tree",
      description: "Watch self-balancing in action with rotation animations. See how AVL trees maintain optimal height.",
      href: "/visualizer/avl-tree",
      icon: TreePine,
    },
    {
      name: "Heap",
      description: "Learn priority queue mechanics through heapify operations. Toggle between min and max heap variants.",
      href: "/visualizer/heap",
      icon: Box,
    },
  ],
  applications: [
    {
      name: "Infix to Postfix",
      description: "Transform mathematical expressions with stack-based conversion. Follow each step of the algorithm visually.",
      href: "/visualizer/stack-applications",
      icon: Calculator,
    },
    {
      name: "Message Queue",
      description: "Experience asynchronous message processing with producer-consumer patterns. Watch messages flow through the system.",
      href: "/visualizer/queue-applications",
      icon: MessageSquare,
    },
    {
      name: "Polynomial Multiplication",
      description: "See polynomial operations come alive with linked list representation. Track term-by-term multiplication.",
      href: "/visualizer/polynomial",
      icon: Calculator,
    },
    {
      name: "Huffman Coding",
      description: "Learn data compression through frequency-based tree construction. Build variable-length prefix codes step by step.",
      href: "/visualizer/huffman",
      icon: Hash,
    },
    {
      name: "Dijkstra's Algorithm",
      description: "Find shortest paths through weighted graphs with priority queue-driven exploration. Watch the algorithm discover optimal routes.",
      href: "/visualizer/dijkstra",
      icon: ArrowRightLeft,
    },
  ]
}

export default function HomePage() {
  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold font-heading tracking-tight">NEXUS Visualizers</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore fundamental data structures and algorithms through elegant, interactive visualizations.
          Watch concepts come alive with real-time animations and step-by-step demonstrations.
        </p>
      </div>

      <div className="space-y-12">
        {/* Data Structures Section */}
        <section>
          <h2 className="text-2xl font-semibold font-heading mb-6">Core Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.dataStructures.map((ds) => {
              const Icon = ds.icon
              return (
                <Link key={ds.href} href={ds.href}>
                  <Card className="h-full hover:bg-muted/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Icon className="h-6 w-6" />
                        <CardTitle>{ds.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{ds.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Applications Section */}
        <section>
          <h2 className="text-2xl font-semibold font-heading mb-6">Advanced Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.applications.map((app) => {
              const Icon = app.icon
              return (
                <Link key={app.href} href={app.href}>
                  <Card className="h-full hover:bg-muted/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Icon className="h-6 w-6" />
                        <CardTitle>{app.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{app.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
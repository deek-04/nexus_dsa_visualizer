# NEXUS

Master data structures through interactive visualization. NEXUS transforms complex algorithms into intuitive visual experiences with elegant, real-time animations.

![NEXUS Landing Page](./public/landing-light.png)
![Stacks](./public/ds-st.png)
![Queue](./public/ds-q.png)
![Linked List](./public/ds-ll.png)
![Polynomial](./public/ds-polynomial-multiplication.png)
![Heap](./public/ds-heap.png)
![Binary Tree](./public/ds-bst.png)
![AVL Tree](./public/ds-avl.png)
![Huffman](./public/ds-huffman.png)
![Dijkstra](./public/ds-dijkstra.png)

## Overview

NEXUS is a modern web platform designed to make learning data structures and algorithms engaging and intuitive. Through smooth animations and interactive demonstrations, complex concepts become clear and accessible.

## Core Features

### Interactive Visualizations
- **Linked Lists**: Explore dynamic node-based structures with pointer connections
- **Stacks & Queues**: Master LIFO and FIFO principles through animated operations
- **Binary Search Trees**: Discover hierarchical data organization with BST properties
- **AVL Trees**: Watch self-balancing in action with rotation animations
- **Heaps**: Learn priority queue mechanics through heapify operations

### Advanced Applications
- **Expression Conversion**: Transform infix expressions to postfix notation
- **Message Queue System**: Experience asynchronous message processing patterns
- **Polynomial Operations**: Visualize polynomial multiplication with linked lists
- **Huffman Encoding**: Learn data compression through frequency-based trees
- **Shortest Path Finding**: Watch Dijkstra's algorithm discover optimal routes

### Key Capabilities
- **Real-time Animations**: Smooth, spring-based physics for natural motion
- **Step-by-Step Execution**: Control the pace of algorithm visualization
- **Interactive Controls**: Manipulate data structures with intuitive inputs
- **Dark Mode Support**: Comfortable viewing in any lighting condition
- **Responsive Design**: Seamless experience across all devices

## Technology Stack

NEXUS leverages cutting-edge web technologies to deliver a polished experience:

- **Next.js 15**: React framework with server-side rendering and app router
- **TypeScript**: Type-safe development for reliability
- **Tailwind CSS**: Utility-first styling with custom NEXUS theme
- **Framer Motion**: Fluid animations with spring physics
- **React Flow**: Powerful node-based visualization engine
- **Shadcn/ui**: Beautiful, accessible UI components

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd nexus
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for local development):
```bash
copy .env.example .env.local
```
Edit `.env.local` with your configuration. See [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md) for detailed instructions.

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

### Deployment

NEXUS is optimized for deployment on Vercel. For detailed deployment instructions, see:

- **[Deployment Guide](./DEPLOYMENT.md)** - Complete step-by-step deployment instructions
- [Environment Setup Guide](./ENVIRONMENT_SETUP.md) - Configure environment variables for production
- [Deployment Spec](./.kiro/specs/app-deployment/) - Technical deployment specification

## Project Architecture

```
nexus/
├── app/                    # Next.js app router
│   ├── (app)/             # Main application routes
│   │   └── visualizer/    # Visualizer pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page
├── components/            
│   ├── ui/                # Reusable UI components
│   ├── visualizer/        # Data structure visualizations
│   ├── landing/           # Landing page sections
│   ├── navigation/        # Navigation components
│   └── global/            # Global components (sidebar, theme)
├── hooks/                 # Custom React hooks for state management
├── lib/                   # Utility functions and configurations
│   └── brand-config.ts    # NEXUS brand constants
└── content/               # Educational content (MDX)
```

## Development

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- ESLint for code quality

### Key Patterns
- Server and client components separation
- Custom hooks for complex state logic
- Framer Motion for all animations
- Responsive-first design approach

## Contributing

NEXUS is a personal learning project. Feel free to fork and adapt for your own use.

## License

This project is open source and available under the MIT License.

## Acknowledgments

Built with modern web technologies and a passion for making computer science education more accessible and engaging.

---

**NEXUS** - Transform your understanding of data structures through elegant visualization.

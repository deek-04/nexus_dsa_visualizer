/**
 * NEXUS Brand Configuration
 * Centralized brand constants and configuration
 */

export const BRAND_CONFIG = {
  name: 'NEXUS',
  tagline: 'Master Data Structures Through Interactive Visualization',
  description: 'A modern platform for learning and understanding data structures through elegant, interactive visualizations. NEXUS transforms complex algorithms into intuitive visual experiences.',
  author: 'Your Name',
  repository: 'your-username/nexus',
  colors: {
    primary: 'hsl(262, 83%, 58%)',      // Purple
    secondary: 'hsl(200, 98%, 39%)',    // Blue
    accent: 'hsl(340, 82%, 52%)',       // Pink
  },
  fonts: {
    heading: 'Space Grotesk',
    body: 'Inter',
  }
} as const;

export type BrandConfig = typeof BRAND_CONFIG;

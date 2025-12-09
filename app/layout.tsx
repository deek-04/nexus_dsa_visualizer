/**
 * NEXUS - Root Layout
 * Application root with metadata and theme providers
 */
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/global/theme-provider";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: "NEXUS - Data Structure Visualizer",
  description: "Master data structures through interactive visualization. NEXUS provides an elegant platform for learning and understanding fundamental data structures and algorithms.",
  keywords: ["data structures", "algorithms", "visualization", "learning", "education", "computer science"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "NEXUS - Data Structure Visualizer",
    description: "Master data structures through interactive visualization",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}

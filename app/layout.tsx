import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'A beautiful and responsive landing page built with Next.js and TailwindCSS',
  keywords: ['Next.js', 'React', 'TailwindCSS', 'Landing Page'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Modern Landing Page',
    description: 'A beautiful and responsive landing page built with Next.js and TailwindCSS',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
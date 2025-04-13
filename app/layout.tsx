import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "Modern Landing Page",
  description:
    "A beautiful and responsive landing page built with Next.js and TailwindCSS",
  keywords: ["Next.js", "React", "TailwindCSS", "Landing Page"],
  authors: [{ name: "mohamed benlaguroun" }],
  openGraph: {
    title: "Modern Landing Page",
    description:
      "A beautiful and responsive landing page built with Next.js and TailwindCSS",
    images: ["/images/hero.png"], // or an absolute URL if you prefer
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
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

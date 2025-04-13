"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { NavItem } from "../types";

const navigation: NavItem[] = [
  { title: "Features", href: "#features" },
  { title: "gallery", href: "gallery" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            Logo
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold">
            Logo
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-6 p-4">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="space-y-4 p-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

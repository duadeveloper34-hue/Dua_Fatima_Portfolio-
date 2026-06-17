// app/components/Navbar.js (updated)
"use client";

import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Portfolio.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-primary"
                    : "text-text-muted hover:text-primary"
                } transition-colors duration-200 font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://github.com/duadeveloper34-hue"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 text-text-muted hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/dua-fatima-854114368/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 text-text-muted hover:text-primary" />
              </a>
            </div>

            {/* <ThemeToggle /> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-text" />
              ) : (
                <FiMenu className="w-6 h-6 text-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-primary bg-surface"
                      : "text-text hover:text-primary"
                  } transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-surface`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 px-4">
                <a
                  href="https://github.com/duadeveloper34-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5 text-text" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dua-fatima-854114368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5 text-text" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5 text-text" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
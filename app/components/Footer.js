import React from "react";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-gradient">
              Portfolio.
            </a>
            <p className="text-text-muted text-sm mt-2">
              Crafting digital experiences since {currentYear - 3}
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-text-muted hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm flex items-center justify-center">
            Made with 
            <FiHeart className="w-4 h-4 mx-2 text-primary" />
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About", "Skills", "Experience", "Contact"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-600 transition-all"
          >
            iamRandeesha
          </button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button
            className="md:hidden text-gray-600 hover:text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white/95 backdrop-blur-sm px-4 pt-2 pb-4">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToTop}
                  className="block py-2 text-gray-600 hover:text-purple-600 transition-colors w-full text-left"
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
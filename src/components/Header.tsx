import React, { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = ["About", "Skills", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setIsAtTop(scrollY < 50); // Adjust this value based on your hero section height

      // Determine active section based on scroll position
      const sections = menuItems.map(item => document.getElementById(item.toLowerCase()));
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 500);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center group focus:outline-none"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-blue-600 transition-all">
              iamRandeesha
            </span>
            <ChevronUp className="ml-1 h-5 w-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-2 py-1 text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
              {!isAtTop && (
                <li>
                  <button
                    onClick={scrollToTop}
                    className="px-3 py-1.5 ml-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 hover:from-purple-100 hover:to-blue-100 transition-all shadow-sm hover:shadow-md"
                  >
                    Back to Top
                  </button>
                </li>
              )}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 hover:from-purple-100 hover:to-blue-100 transition-all focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white/95 backdrop-blur-lg px-4 pt-2 pb-6 shadow-inner">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block py-3 px-4 rounded-lg transition-all ${activeSection === item.toLowerCase() 
                      ? 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {!isAtTop && (
                <li>
                  <button
                    onClick={scrollToTop}
                    className="w-full flex items-center justify-center py-3 px-4 mt-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 font-medium hover:from-purple-100 hover:to-blue-100 transition-all"
                  >
                    Back to Top
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
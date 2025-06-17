import React, { useState } from "react";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About", "Skills", "Experience", "Contact"];
  return <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            iamRandeesha
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <nav className="bg-white px-4 pt-2 pb-4">
            <ul className="space-y-2">
              {menuItems.map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="block text-gray-600 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </li>)}
            </ul>
          </nav>
        </div>}
    </header>;
};
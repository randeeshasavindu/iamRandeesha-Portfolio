import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and copyright */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-600 transition-all focus:outline-none"
            >
              iamRandeesha
            </button>
            <p className="text-gray-600 dark:text-gray-300">
              Senior QA Engineer with passion for quality and innovation
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:randeesha1997@gmail.com"
                className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mt-4"
            >
              <ChevronUp className="w-4 h-4 mr-1" />
              Back to top
            </button>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with ❤️, by Randeesha
          </p>
        </div>
      </div>
    </footer>
  );
};
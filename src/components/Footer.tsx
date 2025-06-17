// src/components/Footer.tsx
import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-300">
        © {currentYear} iamRandeesha. All Rights Reserved.
      </p>
    </footer>
  );
};
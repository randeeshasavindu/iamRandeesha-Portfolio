import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
export const Hero = () => {
  return <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm Randeesha
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Senior QA Engineer
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            ISTQB® certified Experienced senior software QA engineer with 4+ years in diverse domains.
            Passionate about delivering high-quality products and seeking opportunities to drive innovation and
            enhance software quality in dynamic environments.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/randeesha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:randeesha1997@gmail.com"
              aria-label="Send email to Randeesha"
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
            <img src="public/RandeeshaQA.jpg" alt="Randeesha QA" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>;
};
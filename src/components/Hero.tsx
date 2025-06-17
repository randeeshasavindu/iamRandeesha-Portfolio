import React, { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  useEffect(() => {
    // Create particle effect
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 80;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size (small)
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Initial position
      resetParticle(particle);
      
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
      }
      
      // Animate
      animateParticle(particle);
    }
    
    function resetParticle(particle: HTMLDivElement) {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      
      return {
        x: posX,
        y: posY
      };
    }
    
    function animateParticle(particle: HTMLDivElement) {
      // Initial position
      const pos = resetParticle(particle);
      
      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      // Animate with GSAP-like timing
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      // Create particles at mouse position
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      
      // Create temporary particle
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Small size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Position at mouse
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';
      
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
      }
      
      // Animate outward
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);
      
      // Subtle movement of gradient spheres
      const spheres = document.querySelectorAll('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
      
      spheres.forEach((sphere: Element) => {
        (sphere as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animation elements */}
      <div className="gradient-background absolute inset-0">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" id="particles-container"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hi, I'm Randeesha
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Senior QA Engineer
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              ISTQB® certified experienced senior software QA engineer with 4+ years in diverse domains.
              Passionate about delivering high-quality products and seeking opportunities to drive innovation and
              enhance software quality in dynamic environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/randeesha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:randeesha1997@gmail.com"
                aria-label="Send email to Randeesha"
                className="p-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto relative z-10 border-4 border-purple-400/20">
              <img 
                src="https://iam-randeesha-portfolio.vercel.app/RandeeshaQA.jpg" 
                alt="Randeesha QA" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS styles */}
      <style>{`
        .gradient-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .sphere-1 {
          width: 40vw;
          height: 40vw;
          background: linear-gradient(40deg, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2));
          top: -10%;
          left: -10%;
          animation: float-1 15s ease-in-out infinite alternate;
        }

        .sphere-2 {
          width: 45vw;
          height: 45vw;
          background: linear-gradient(240deg, rgba(124, 58, 237, 0.4), rgba(59, 130, 246, 0.2));
          bottom: -20%;
          right: -10%;
          animation: float-2 18s ease-in-out infinite alternate;
        }

        .sphere-3 {
          width: 30vw;
          height: 30vw;
          background: linear-gradient(120deg, rgba(109, 40, 217, 0.3), rgba(29, 78, 216, 0.15));
          top: 60%;
          left: 20%;
          animation: float-3 20s ease-in-out infinite alternate;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          z-index: 5;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @keyframes float-1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(10%, 10%) scale(1.1);
          }
        }

        @keyframes float-2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-10%, -5%) scale(1.15);
          }
        }

        @keyframes float-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-5%, 10%) scale(1.05);
            opacity: 0.6;
          }
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          z-index: 2;
        }

        .glow {
          position: absolute;
          width: 40vw;
          height: 40vh;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          animation: pulse 8s infinite alternate;
          filter: blur(30px);
        }

        @keyframes pulse {
          0% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.9);
          }
          100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};
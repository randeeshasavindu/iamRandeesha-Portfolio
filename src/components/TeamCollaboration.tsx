import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, MessageSquare, GitPullRequest, ChevronLeft, ChevronRight } from "lucide-react";

export const TeamCollaboration = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Update these with your actual image paths in the public folder
  const teamImages = [
   {
      id: 1,
      src: "https://iam-randeesha-portfolio.vercel.app/TeamImage01.jpg",
      alt: "Team Meeting",
      description: "Leading daily standup with QA team members"
    },
    {
      id: 2,
      src: "https://iam-randeesha-portfolio.vercel.app/TeamImage03.jpg",
      alt: "Code Review",
      description: "Pair programming with junior developers"
    },
    {
      id: 3,
      src: "https://iam-randeesha-portfolio.vercel.app/TeamImage04.jpg",
      alt: "Retrospective",
      description: "Conducting sprint retrospective session"
    },
    {
      id: 4,
      src: "https://iam-randeesha-portfolio.vercel.app/TeamImage02.jpg",
      alt: "Workshop",
      description: "Running test automation workshop"
    }
  ];

  const skills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led QA teams of 5-10 members, coordinating testing efforts across multiple projects"
    },
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title: "Code Reviews",
      description: "Conducted thorough code reviews for test automation scripts ensuring best practices"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Stakeholder Communication",
      description: "Facilitated clear communication between developers, PMs, and clients"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mentorship",
      description: "Mentored junior QA engineers in testing methodologies and automation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === teamImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? teamImages.length - 1 : prev - 1));
  };

  return (
    <section id="team-collaboration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
            Team Collaboration & Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driving quality through effective teamwork and leadership in cross-functional environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Display Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Image Display */}
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <motion.div
                key={teamImages[activeImage].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={teamImages[activeImage].src} 
                  alt={teamImages[activeImage].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image Info Box (now outside the image) */}
              <div className="absolute -bottom-14 left-0 right-0 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <p className="font-medium text-gray-800">{teamImages[activeImage].alt}</p>
                <p className="text-gray-600 text-sm">{teamImages[activeImage].description}</p>
              </div>
            </div>

            {/* Carousel Navigation (now below the image) */}
            <div className="flex items-center justify-between">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </button>

              <div className="flex gap-2 mx-4">
                {teamImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(index)}
                    className={`w-10 h-10 rounded-md overflow-hidden border transition-all ${
                      activeImage === index 
                        ? 'border-purple-500 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={`Thumbnail ${img.alt}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-purple-600" />
              </button>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-gray-700 text-lg">
              With extensive experience leading QA teams and collaborating across departments, I bridge the gap between technical 
              and non-technical stakeholders to deliver exceptional software quality. My approach combines technical expertise 
              with strong interpersonal skills to foster productive teamwork.
            </motion.p>

            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-purple-200 transition-all hover:shadow-md"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800">{skill.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
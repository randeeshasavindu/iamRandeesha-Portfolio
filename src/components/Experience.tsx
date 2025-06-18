import React, { useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "Ambrum Solutions Pvt Ltd, Colombo (On-Site)",
      period: "Aug 2024 - Present",
      description: [
        "Developed and implemented comprehensive test plans for multiple software releases, ensuring 99.9% software stability and usability.",
        "Detected and documented over 500 software defects, providing detailed feedback that accelerated the debugging process by 30%.",
        "Collaborated with an interdisciplinary team of software engineers, ensuring the timely delivery of key testing milestones.",
        "Applied advanced automation testing techniques, reducing manual testing efforts by 70% while improving test coverage by 50%.",
        "Initiated a process optimization project that improved overall product quality, resulting in a 15% reduction in post-release issues."
      ]
    },
    {
      title: "QA Engineer",
      company: "Arimac Lanka PVT Ltd, Colombo (Hybrid)",
      period: "Jan 2022 - July 2024",
      description: [
        "Executed test cases for multiple software products, achieving a 98% pass rate.",
        "Contributed to bug triage meetings, sharing insights and detailed descriptions for the high and critical bugs.",
        "Developed and maintained a framework of reusable test scripts, boosting team efficiency by 20%.",
        "Participated in continuous integration and release processes, ensuring smooth software rollouts.",
        "Trained 5 junior QA engineers and interns in the use of testing frameworks, elevating team skills and capabilities."
      ]
    },
    {
      title: "Intern QA Engineer",
      company: "Azend Technologies PVT Ltd, Colombo (Hybrid)",
      period: "June 2021 - Jan 2022",
      description: [
        "Executed 150+ manual test cases for web and mobile apps, helping identify 100+ bugs during user acceptance testing.",
        "Reported and tracked 100+ issues using JIRA, improving communication between QA and development teams.",
        "Assisted in creating and updating test cases in QAlity test, ensuring clear and organized test documentation.",
        "Helped run regression tests across browser/device combinations, catching critical compatibility issues.",
        "Wrote basic Cypress scripts that automated 60% of the assigned project, reducing repetitive testing time.",
        "Joined daily stand-ups and sprint reviews, gaining hands-on experience with Agile workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-300 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-300 blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${hoveredCard === index ? 'ring-2 ring-purple-500 shadow-xl' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline indicator */}
              <div className={`absolute left-0 top-0 h-full w-1 ${index === 0 ? 'bg-purple-500' : index === 1 ? 'bg-blue-500' : 'bg-indigo-500'}`}></div>
              
              <div className="p-8 pl-10">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-6 ${index === 0 ? 'bg-purple-100 text-purple-600' : index === 1 ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'}`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-6">
                      {exp.description.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-start before:content-[''] before:block before:w-2 before:h-2 before:rounded-full before:mt-2 before:mr-3 before:flex-shrink-0 before:bg-purple-500"
                        >
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${index === 0 ? 'from-purple-500' : index === 1 ? 'from-blue-500' : 'from-indigo-500'} to-transparent`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 1s; }
      `}</style>
    </section>
  );
};
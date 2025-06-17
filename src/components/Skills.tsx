import React from "react";
import { Check } from "lucide-react";

export const Skills = () => {
  const skills = [{
    category: "Testing",
    items: ["Manual Testing", "Automated Testing", "API Testing", "Performance Testing", "Mobile App Testing", "Test Strategy & Release Management"]
  }, {
    category: "Tools",
    items: ["Selenium", "Cypress", "Appium", "Playwright", "RestAssured", "Postman", "LoadRunner", "JMeter", "JIRA", "Jenkins","MongoDB","Azure DevOps","GitHub","BitBucket"]
  }, {
    category: "Programming",
    items: ["JavaScript","TypeScript","JAVA", "Python", "SQL", "HTML/CSS"]
  }];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <div key={skill.category} className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              
              {skill.category === "Tools" ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {skill.items.map(item => (
                    <div key={item} className="flex items-center">
                      <Check size={16} className="text-purple-600 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center">
                      <Check size={16} className="text-purple-600 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
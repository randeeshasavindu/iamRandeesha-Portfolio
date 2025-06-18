import React, { useState } from "react";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  const skillCategories = [
    "All",
    "Testing Fundamentals",
    "Automation Testing",
    "Programming Languages",
    "API Testing",
    "Performance & Load Testing",
    "Tools & DevOps",
    "Test & Bug Management",
    "Soft Skills",
    "Domain Knowledge"
  ];

  const skills = [
    { name: "Manual Testing", percentage: 95, category: "Testing Fundamentals" },
    { name: "Test Case Design", percentage: 96, category: "Testing Fundamentals" },
    { name: "Bug Reporting & Tracking", percentage: 95, category: "Testing Fundamentals" },
    { name: "Test Planning & Strategy", percentage: 90, category: "Testing Fundamentals" },
    { name: "Types of Testing", percentage: 95, category: "Testing Fundamentals" },
    { name: "Selenium WebDriver", percentage: 85, category: "Automation Testing" },
    { name: "Cypress", percentage: 85, category: "Automation Testing" },
    { name: "Playwright", percentage: 70, category: "Automation Testing" },
    { name: "Test Automation Framework Design (POM, BDD)", percentage: 75, category: "Automation Testing" },
    { name: "Appium", percentage: 70, category: "Automation Testing" },
    { name: "Java", percentage: 80, category: "Programming Languages" },
    { name: "JavaScript", percentage: 70, category: "Programming Languages" },
    { name: "MySQL", percentage: 85, category: "Programming Languages" },
    { name: "HTML/CSS", percentage: 80, category: "Programming Languages" },
    { name: "Bash/Shell Scripting", percentage: 70, category: "Programming Languages" },
    { name: "Postman", percentage: 85, category: "API Testing" },
    { name: "Rest Assured", percentage: 70, category: "API Testing" },
    { name: "HTTP Methods & Status Codes", percentage: 90, category: "API Testing" },
    { name: "JSON / XML Assertions", percentage: 70, category: "API Testing" },
    { name: "API Test Automation Scripts", percentage: 80, category: "API Testing" },
    { name: "JMeter", percentage: 85, category: "Performance & Load Testing" },
    { name: "K6", percentage: 70, category: "Performance & Load Testing" },
    { name: "Load Runner", percentage: 70, category: "Performance & Load Testing" },
    { name: "Git / GitHub", percentage: 85, category: "Tools & DevOps" },
    { name: "Maven", percentage: 80, category: "Tools & DevOps" },
    { name: "Jenkins", percentage: 70, category: "Tools & DevOps" },
    { name: "JIRA", percentage: 95, category: "Test & Bug Management" },
    { name: "Zephyr", percentage: 85, category: "Test & Bug Management" },
    { name: "QAlity Test", percentage: 80, category: "Test & Bug Management" },
    { name: "Confluence", percentage: 95, category: "Test & Bug Management" },
    { name: "Communication", percentage: 99, category: "Soft Skills" },
    { name: "Analytical Thinking", percentage: 95, category: "Soft Skills" },
    { name: "Collaboration", percentage: 95, category: "Soft Skills" },
    { name: "Leadership & Mentoring", percentage: 98, category: "Soft Skills" },
    { name: "Healthcare", percentage: 90, category: "Domain Knowledge" },
    { name: "FinTech", percentage: 90, category: "Domain Knowledge" },
    { name: "Telco", percentage: 92, category: "Domain Knowledge" },
    { name: "E-Commerce", percentage: 90, category: "Domain Knowledge" },
    { name: "Aviation", percentage: 85, category: "Domain Knowledge" },
    { name: "Retail", percentage: 90, category: "Domain Knowledge" },
    { name: "Sports & Entertainment", percentage: 90, category: "Domain Knowledge" },
    { name: "Hospitality", percentage: 85, category: "Domain Knowledge" }
  ];

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === category 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-500">{skill.percentage}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              
              <div className="mt-1 text-xs text-gray-500">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
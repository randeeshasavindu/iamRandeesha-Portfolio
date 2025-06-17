import React from "react";
export const Experience = () => {
  const experiences = [{
    title: "Senior QA Engineer",
    company: "Ambrum Solutions Pvt Ltd, Colombo (On-Site)",
    period: "Aug 2024 - Present",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500">
        <li>Developed and implemented comprehensive test plans for multiple software releases, ensuring 99.9% software stability and usability.</li>
        <li>Detected and documented over 500 software defects, providing detailed feedback that accelerated the debugging process by 30%.</li>
        <li>Collaborated with an interdisciplinary team of software engineers, ensuring the timely delivery of key testing milestones.</li>
        <li>Applied advanced automation testing techniques, reducing manual testing efforts by 70% while improving test coverage by 50%.</li>
        <li>Initiated a process optimization project that improved overall product quality, resulting in a 15% reduction in post-release issues.</li>
      </ul>
    )
  }, {
    title: "QA Engineer",
    company: "Arimac Lanka PVT Ltd, Colombo (Hybrid)",
    period: "Jan 2022 - July 2024",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500">
        <li>DExecuted test cases for multiple software products, achieving a 98% pass rate.</li>
        <li>Contributed to bug triage meetings, sharing insights and detailed descriptions for the high and critical bugs.</li>
        <li>Developed and maintained a framework of reusable test scripts, boosting team efficiency by 20%.</li>
        <li>Participated in continuous integration and release processes, ensuring smooth software rollouts.</li>
        <li>Trained 5 junior QA engineers and interns in the use of testing frameworks, elevating team skills and capabilities.</li>
      </ul>
    )
  },  {
    title: "Intern QA Engineer",
    company: "Azend Technologies PVT Ltd, Colombo (Hybrid)",
    period: "June 2021- Jan 2022",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-gray-500">
        <li>Executed 150+ manual test cases for web and mobile apps, helping identify 100+ bugs during user acceptance testing.</li>
        <li>Reported and tracked 100+ issues using JIRA, improving communication between QA and development teams.</li>
        <li>Assisted in creating and updating test cases in QAlity test, ensuring clear and organized test documentation.</li>
        <li>Helped run regression tests across browser/device combinations, catching critical compatibility issues.</li>
        <li>Wrote basic Cypress scripts that automated 60% of the assigned project, reducing repetitive testing time.</li>
        <li>Joined daily stand-ups and sprint reviews, gaining hands-on experience with Agile workflows.</li>
      </ul>
    )
  }];
  return <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-purple-600">
                {exp.title}
              </h3>
              <p className="text-gray-600 mt-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
              <p className="mt-4">{exp.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
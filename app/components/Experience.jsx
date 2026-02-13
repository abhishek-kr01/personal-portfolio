import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Software Engineering Intern",
    company: "Lawyered",
    duration: "Oct 2025 – Present",
    location: "Gurugram, India (On-site)",
    points: [
      "Developing scalable web application features using React.js, Next.js, Node.js, and TypeScript in a production environment.",
      "Building and integrating RESTful APIs to support frontend and backend communication.",
      "Implementing secure authentication and role-based access workflows.",
      "Developing admin dashboard features to improve internal operations and data management.",
      "Collaborating with engineering teams to deliver performance-focused and maintainable solutions."
    ],
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Nirjai Technologies Pvt. Ltd.",
    duration: "Jul 2025 – Oct 2025",
    location: "New Delhi, India (On-site)",
    points: [
      "Worked on real-world feature development and bug fixing using JavaScript and TypeScript.",
      "Integrated and consumed REST APIs to enable smooth frontend–backend communication.",
      "Collaborated with cross-functional teams to improve application performance and maintain code quality.",
      "Gained hands-on experience with production debugging and professional development workflows."
    ],
  },
  {
    role: "Back End Developer Intern",
    company: "Mind Empowered Charitable Trust",
    duration: "Dec 2024 – May 2025",
    location: "Kochi, Kerala (Hybrid)",
    points: [
      "Developed backend services for a Volunteer Event Management System using Node.js, Express.js, and MongoDB.",
      "Designed and implemented RESTful APIs for event and volunteer management workflows.",
      "Handled database operations, API testing, and debugging using Postman.",
      "Strengthened backend fundamentals including API design, data modeling, and team collaboration."
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Main Flow Services and Technologies Pvt. Ltd.",
    duration: "Nov 2024 – Jan 2025",
    location: "Remote",
    points: [
      "Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Developed responsive UI components and integrated backend APIs.",
      "Worked in Agile-style collaboration using Git and GitHub for version control."
    ],
  },
  {
    role: "Web Development Intern",
    company: "OctaNet Services Pvt. Ltd.",
    duration: "Oct 2024 – Nov 2024",
    location: "Remote",
    points: [
      "Built responsive web pages using HTML, CSS, and JavaScript.",
      "Improved frontend development fundamentals and practical workflow understanding.",
      "Collaborated remotely while following structured development practices."
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Experience
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
      >
        Professional Journey
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-14 space-y-10">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="border border-gray-300 rounded-xl p-6 hover:shadow-lg duration-500 dark:border-white/30"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-600 dark:text-white/70">
              {exp.company} · {exp.location}
            </p>

            <p className="text-sm text-gray-500 dark:text-white/60 mb-4">
              {exp.duration}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-white/80">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
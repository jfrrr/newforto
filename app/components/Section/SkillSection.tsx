"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const hardSkills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Pro" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "VS Code", level: "Expert" },
    { name: "Vite", level: "Pro" },
    { name: "GitHub", level: "Pro" },
    { name: "Artificial Intelligence", level: "Expert" },
  ];

  const softSkills = [
    { name: "Teamwork", level: "Pro" },
    { name: "Time Management", level: "Intermediate" },
    { name: "Public Speaking", level: "Intermediate" },
    { name: "Adaptability", level: "Pro" },
    { name: "Problem Solving", level: "Pro" },
    { name: "Leadership", level: "Intermediate" },
    { name: "Communication", level: "Intermediate" },
    { name: "Empathy", level: "Pro" },
    { name: "Conflict Resolution", level: "Pro" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 text-[#ECEFE3]"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-[#32B5C7] mb-14 text-center"
      >
        Skills
      </motion.h2>

      {/* Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">

        {/* Hard Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-md border border-[#32B5C7]/30 rounded-2xl p-8 shadow-[0_0_15px_#32B5C780]"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#32B5C7]">Hard Skills</h3>
          <ul className="space-y-4">
            {hardSkills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex justify-between items-center px-4 py-3 bg-[#141511] rounded-lg"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm px-2 py-1 rounded-md bg-[#32B5C7]/15 text-[#32B5C7] font-bold">
                  {skill.level}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-md border border-[#32B5C7]/30 rounded-2xl p-8 shadow-[0_0_15px_#32B5C780]"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#32B5C7]">Soft Skills</h3>
          <ul className="space-y-4">
            {softSkills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex justify-between items-center px-4 py-3 bg-[#141511] rounded-lg"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm px-2 py-1 rounded-md bg-[#32B5C7]/15 text-[#32B5C7] font-bold">
                  {skill.level}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

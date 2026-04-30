import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "React Developer Intern",
      company: "Creyotech It Services",
      duration: "Apr 2026 – Present",
      desc: "Building responsive UI components using React Advanced, Tailwind CSS and Motion. Collaborating with backend developers and working on real-world projects.",
    },
    {
      role: "Frontend Developer Intern",
      company: "TechOctanet Services",
      duration: "Dec 2024 – Jan 2025",
      desc: "Building responsive UI components using React and Tailwind CSS. Collaborating with backend developers and working on real-world projects.",
    },
    {
      role: "Self-Taught Developer",
      company: "Personal Learning",
      duration: "2024 – Present",
      desc: "Learning and building projects using React, JavaScript, and MERN stack. Focused on real-world applications and problem-solving.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-5 md:px-10 mt-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-[#2a2a2a] pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#EB6200] rounded-full shadow-md group-hover:scale-125 transition"></div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-[#2a2a2a] rounded-xl p-5 md:p-6 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>

              <p className="text-[#EB6200] text-sm mt-1">{exp.company}</p>

              <p className="text-xs text-[#AAAAAA] mt-1">{exp.duration}</p>

              <p className="text-sm md:text-base text-[#5B5A5A] mt-3 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

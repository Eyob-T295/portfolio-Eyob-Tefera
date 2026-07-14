import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: "💻",
    skills: ["PHP", "Python", "JavaScript (ES6+)", "React Native", "Android", "C#", "HTML5 & CSS3", "Flutter", "Django", "Node.js"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500 shadow-blue-500/20"
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    skills: ["TensorFlow", "Scikit-learn", "Machine Learning", "Data Analysis", "Signal Processing", "SDR"],
    gradient: "from-purple-500 via-pink-500 to-red-500 shadow-purple-500/20"
  },
  {
    title: "Databases & DevOps",
    icon: "🛠️",
    skills: ["MySQL", "PostgreSQL", "Docker", "Oracle", "Nginx", "PM2", "Systemd", "Ubuntu Server", "MariaDB"],
    gradient: "from-green-500 via-emerald-500 to-teal-500 shadow-green-500/20"
  },
  {
    title: "Professional Skills",
    icon: "📋",
    skills: ["Project Management", "Team Leadership", "Agile Methodologies"],
    gradient: "from-yellow-400 via-orange-500 to-red-500 shadow-yellow-500/20"
  }
];

const SkillCard = ({ index, title, icon, skills, gradient }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className="bg-tertiary/70 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] flex flex-col justify-start transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl filter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{icon}</span>
        <h3 className="text-white font-bold text-[22px] tracking-wide group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, idx) => (
          <motion.div
            key={`${title}-${skill}-${idx}`}
            whileHover={{ scale: 1.08, y: -2 }}
            className={`px-4 py-2 text-[14px] text-gray-200 font-medium tracking-wide bg-black-100/40 rounded-full border border-white/5 shadow-sm hover:border-purple-400/50 hover:bg-gradient-to-r ${gradient} hover:text-white transition-all duration-200 cursor-default select-none`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="skills-section" ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={`skill-category-${index}`} index={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
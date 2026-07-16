import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

// ── Filter categories ───────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "all", label: "All Projects", emoji: "🗂️" },
  { key: "ai_r&d", label: "AI & R&D", emoji: "🤖" },
  { key: "web_systems", label: "Web & Systems", emoji: "💻" },
  { key: "mobile_client", label: "Mobile & Client", emoji: "📱" },
];

// ── Globe SVG icon ───────────────────────────────────────────────────────────
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  animate,
}) => {
  return (
    <motion.div
      variants={animate}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-tertiary/90 border border-white/10 shadow-[0_20px_60px_rgba(57,0,90,0.25)] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      {/* Image area */}
      <div className="relative w-full h-[230px]">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-2xl bg-white/5 text-white/70 text-sm">
            No image available
          </div>
        )}

        {/* Top-right icon buttons */}
        <div className="absolute inset-0 flex justify-end items-start gap-2 m-3 card-img_hover">
          {/* GitHub icon */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            title="View Source Code"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)] hover:scale-110"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          {/* Live demo globe icon — only shown if link exists */}
          {live_project_link && (
            <div
              onClick={() => window.open(live_project_link, "_blank", "noopener,noreferrer")}
              title="View Live Project"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,200,255,0.7)] hover:scale-110"
            >
              <GlobeIcon />
            </div>
          )}
        </div>
      </div>

      {/* Text area */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      {/* Live Project button (bottom) */}
      {live_project_link && (
        <a
          href={live_project_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]">
            Live Project
          </button>
        </a>
      )}
    </motion.div>
  );
};

// ── Works Section ─────────────────────────────────────────────────────────────
const Works = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const isInView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });
  const mainControls = useAnimation();
  const projectItems = Array.isArray(projects) ? projects : [];

  const filteredProjects =
    activeCategory === "all"
      ? projectItems
      : projectItems.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={ref}>
      {/* Subtitle */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionSubText} text-center`}>
          Innovative Creations
        </h3>
      </motion.div>

      {/* Title */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
        }}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>Projects.</h3>
      </motion.div>

      {/* ── Category Filter Tabs ── */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
        }}
        className="flex flex-wrap justify-center gap-3 mt-8 mb-6"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeCategory === cat.key
                ? "bg-violet-600 border-violet-400 text-white shadow-[0_0_14px_rgba(139,92,246,0.6)]"
                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </motion.div>

      {/* ── Project Grid ── */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
        }}
      >
        <p className="text-center text-sm text-white/50 mb-6">
          Showing {filteredProjects.length} project
          {filteredProjects.length === 1 ? "" : "s"}
          {activeCategory !== "all" && (
            <span className="text-violet-400"> in {CATEGORIES.find(c => c.key === activeCategory)?.label}</span>
          )}
        </p>

        <div
          className={`${
            isMobile
              ? "grid grid-cols-1 gap-4 place-items-center"
              : "flex flex-wrap gap-7 justify-center"
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={`project-${project.name}`}
                animate={fadeIn("up", "spring", Math.min(index * 0.1, 1.0), 0.75)}
                {...project}
              />
            ))
          ) : (
            <p className="text-white/60 text-center mt-10">
              No projects in this category yet.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

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
      <div className="relative w-full h-[230px]">
        {image ? (
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-2xl bg-white/5 text-white/70 text-sm">
            No image available
          </div>
        )}

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      {live_project_link && (
        <a href={live_project_link} target="_blank" rel="noopener noreferrer">
          <button className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]">
            Live Project
          </button>
        </a>
      )}
    </motion.div>
  );
};

const Works = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" }); // Adjust amount as needed
  const mainControls = useAnimation();
  const projectItems = Array.isArray(projects) ? projects : [];

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

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>Projects.</h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.3 } },
        }}
      >
        <p className="text-center text-sm text-white/70 mt-4">Showing {projectItems.length} project{projectItems.length === 1 ? "" : "s"}.</p>
        <div className={`${isMobile ? "grid grid-cols-1 gap-4 place-items-center" : "flex flex-wrap gap-7 justify-center"}`}>
          {projectItems.length > 0 ? (
            projectItems.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                animate={fadeIn("up", "spring", index * 0.15, 0.75)}
                {...project}
              />
            ))
          ) : (
            <p className="text-white text-center mt-10">No projects available right now.</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");

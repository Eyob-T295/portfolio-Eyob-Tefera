import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { awards } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const AwardCard = ({ index, title, type, icon, iconBg, date, points }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-tertiary/70 backdrop-blur-md p-8 rounded-2xl w-full flex flex-col justify-between border border-white/10 hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)] transition-all duration-300 group"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div
            className="w-14 h-14 rounded-full flex justify-center items-center overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: iconBg || "#1a1a2e" }}
          >
            <img src={icon} alt={title} className="w-3/4 h-3/4 object-contain" />
          </div>
          <span className="text-secondary text-[14px] font-medium tracking-wide bg-black-100/50 py-1 px-3 rounded-full border border-white/5">{date}</span>
        </div>
        
        <h3 className="text-white font-bold text-[22px] leading-tight mb-2 tracking-wide group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
        <p className="text-purple-400 text-[13px] uppercase tracking-widest font-semibold mb-6">{type}</p>
        
        <ul className="list-disc ml-5 space-y-3">
          {points.map((point, i) => (
            <li key={`award-point-${i}`} className="text-gray-300 text-[14px] leading-relaxed pl-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Awards = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="w-full">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={`${styles.sectionSubText} text-center`}>Recognition & Milestones</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Honours & Awards</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <AwardCard key={`award-${index}`} index={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Awards, "awards");

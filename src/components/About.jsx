"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { resume, profilepic } from "../assets"

// ── Animated count-up hook ──────────────────────────────────────────
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let rafId = null
    let startTime = null
    const numericTarget = parseFloat(target)

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }
    rafId = requestAnimationFrame(step)

    // Cleanup: cancel animation frame on unmount or dependency change
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [start, target, duration])

  return count
}

// ── Single stat card with suffix support (e.g. "5+" or "100%") ──────
const StatCard = ({ value, suffix, label, delay, inView }) => {
  const numericValue = parseFloat(value)
  const count = useCountUp(numericValue, 2000, inView)

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.75)}
      className="flex flex-col items-center justify-center bg-tertiary rounded-2xl px-8 py-6 shadow-card min-w-[140px]"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(145,94,255,0.4)" }}
    >
      <span className="text-4xl font-extrabold text-white">
        {count}
        <span className="text-[#915EFF]">{suffix}</span>
      </span>
      <span className="mt-2 text-secondary text-[14px] text-center leading-tight">{label}</span>
    </motion.div>
  )
}

// ── About component ──────────────────────────────────────────────────
const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const stats = [
    { value: 5,   suffix: "+",  label: "Years of Experience" },
    { value: 15,  suffix: "+",  label: "Projects Delivered"  },
    { value: 3,   suffix: "",   label: "Countries Served"    },
    { value: 100, suffix: "%",  label: "Client Satisfaction" },
  ]

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      {/* ── Section heading ── */}
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* ── Profile + bio ── */}
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile picture + buttons */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(128,0,1028,1.0)]">
            <div className="w-full h-full overflow-hidden">
              <img
                src={profilepic || "/placeholder.svg"}
                alt="Eyob Tefera"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover", objectPosition: "50% 50%" }}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(resume, "_blank")}
            >
              Resume
            </motion.button>

            <motion.button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://www.linkedin.com/in/eyobtefera1/", "_blank")}
            >
              LinkedIn
            </motion.button>

            <motion.button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://github.com/Eyob-T295", "_blank")}
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)} className="w-full md:w-2/3">
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.1, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">👋</span>
              <span>
                Hi! I&apos;m Eyob, a <strong className="text-white">System Engineer and Tech Researcher</strong> with
                a passion for building things that live at the intersection of hardware and software.
                With a background in BSc Computer Science and MSc Project Management, I focus on creating
                reliable, scalable solutions for real-world problems.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.2, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">⚙️</span>
              <span>
                My work revolves around <strong className="text-white">research and development</strong>, where I
                design and integrate systems involving real-time data, signal analysis, and secure deployments.
                I love transforming complex theoretical concepts into practical tools that make a difference.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.3, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🚀</span>
              <span>
                Whether it&apos;s building <strong className="text-white">AI models for signal classification</strong> or
                optimizing enterprise IT infrastructure, I&apos;m always looking for new ways to innovate and learn.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>

      {/* ── Count-up stats row ── */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 0.75)}
        initial="hidden"
        animate={mainControls}
        className="mt-16 flex flex-wrap justify-center gap-6"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={0.9 + index * 0.15}
            inView={isInView}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about")

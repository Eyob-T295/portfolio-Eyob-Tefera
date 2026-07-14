"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Toaster, toast } from "react-hot-toast"
import Confetti from "react-confetti"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const formRef = useRef()
  const [humanCheck, setHumanCheck] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [])

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden"
    } else {
      document.body.style.overflowX = ""
    }

    return () => {
      document.body.style.overflowX = ""
    }
  }, [showConfetti])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: "bottom-right",
      })
      return
    }

    if (!humanCheck) {
      toast("Please confirm you are not a robot! 🤖", {
        icon: "🛡️",
        duration: 3500,
        position: "bottom-right",
      })
      return
    }

    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Eyob Tefera",
          from_email: form.email,
          to_email: "eyobtefera295@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN,
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          setForm({ name: "", email: "", message: "" })
          toast.success("Message sent successfully!", {
            duration: 3000,
            position: "bottom-right",
          })
          setShowConfetti(true)
          setHumanCheck(false)
          setTimeout(() => {
            setSuccess(false)
            setShowConfetti(false)
          }, 5000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
          toast.error("Something went wrong. Please try again.", {
            duration: 3000,
            position: "bottom-right",
          })
        },
      )
  }

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false)
  }, [])

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden no-select items-center">
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full max-w-3xl bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="tel:+251911439853"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
            >
              <FontAwesomeIcon icon={faPhone} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">+251 91 143 9853</span>
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="https://wa.me/251911439853"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 hover:gap-3 group font-medium"
            >
              <span>💬 WhatsApp: etyob_real</span>
            </a>
          </div>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-purple-400" />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faComment} className="text-purple-400" />
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Eyob! I'd love to collaborate with you on a project 🎉"
              className="bg-black-100/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-2 border-white/20 font-medium transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-black-100/70 hover:border-white/30 resize-none"
            />
          </label>

          <div className="flex items-center gap-3 py-2 px-4 bg-black-100/50 rounded-xl border-2 border-white/20">
            <input
              type="checkbox"
              id="humanCheck"
              checked={humanCheck}
              onChange={(e) => setHumanCheck(e.target.checked)}
              className="w-5 h-5 accent-purple-500 cursor-pointer"
            />
            <label htmlFor="humanCheck" className="text-secondary text-sm cursor-pointer select-none">
              I am not a robot 🤖
            </label>
          </div>
          <span className="text-xs text-gray-400 text-center -mt-4">Your message is safe with me. ⚔️</span>

          <button
            type="submit"
            className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
            disabled={loading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
            ) : success ? (
              <>
                <span>Sent Successfully</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

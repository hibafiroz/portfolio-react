import { addDoc, collection } from "firebase/firestore"
import { motion } from "framer-motion"
import { i } from "framer-motion/client"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { db } from "../utils/firebase"
import toast from "react-hot-toast"


function Contact() {

  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  })

  const [loading, setLoading] = useState(false)

  const [formErr, setFormErr] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    setFormErr((prev) => ({
      ...prev,
      [`${name}Err`]: "",
      fullErr: "" 
    }))
  }

  const handleForm = async(e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.name.trim() && !formData.email.trim() && !formData.message.trim()) {
      errors.fullErr = "Please fill in all fields"
      setFormErr(errors)
      return
    }
    if (!formData.name.trim()) {
      errors.nameErr = "Name is required"
    }
    if (!formData.email.trim()) {
      errors.emailErr = "Email is required"
    }
    if (!formData.message.trim()) {
      errors.messageErr = "Message is required"
    }
    if(Object.keys(errors).length > 0) {
      setFormErr(errors)
      return
    }

    setLoading(true)
    try {
      await addDoc(collection(db, 'portfolio-contact'), {
        name:formData.name,
        email:formData.email,
        message:formData.message,
        createdAt:new Date()
      })
      toast.success("Message sent successfully")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.log(err.message)
      setFormErr({ fullErr: "Failed to send message!" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#0A0A0A]">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <p className="text-orange-400 uppercase tracking-[4px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Let’s Build Something
            Great Together
          </h2>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
          >

            <h3 className="text-3xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-10">
              I’m always interested in new opportunities,
              creative projects, and collaborations.
              Feel free to reach out if you’d like to connect.
            </p>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4">

              <a target="blank"
                href="https://github.com/hibafiroz"
                className="flex items-center gap-3 border border-white/10 hover:border-orange-400 transition px-5 py-3 rounded-2xl"
              >
                <FiGithub />
                GitHub
              </a>

              <a target="blank"
                href="https://www.linkedin.com/in/hibafiroz"
                className="flex items-center gap-3 border border-white/10 hover:border-orange-400 transition px-5 py-3 rounded-2xl"
              >
                <FiLinkedin />
                LinkedIn
              </a>

              <a target="blank"
                href="mailto:hibafiroz06@gmail.com"
                className="flex items-center gap-3 border border-white/10 hover:border-orange-400 transition px-5 py-3 rounded-2xl"
              >
                <FiMail />
                Email
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleForm}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 space-y-6"
          >

            {/* NAME */}
            <div>
              <label className="block text-sm text-zinc-400 mb-3">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name" value={formData.name} onChange={handleChange} name="name"
                className="w-full bg-black/30 border border-white/10 focus:border-orange-400 outline-none transition rounded-2xl px-5 py-4"
              />
              <p className="text-sm text-red-500 mt-1">{formErr.nameErr}</p>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm text-zinc-400 mb-3">
                Email Address
              </label>

              <input
                type="email" value={formData.email} onChange={handleChange} name="email"
                placeholder="Enter your email"
                className="w-full bg-black/30 border border-white/10 focus:border-orange-400 outline-none transition rounded-2xl px-5 py-4"
              />
              <p className="text-sm text-red-500 mt-1">{formErr.emailErr}</p>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-zinc-400 mb-3">
                Message
              </label>

              <textarea
                rows="5" value={formData.message} onChange={handleChange} name="message"
                placeholder="Write your message..."
                className="w-full resize-none bg-black/30 border border-white/10 focus:border-orange-400 outline-none transition rounded-2xl px-5 py-4"
              />
              <p className="text-sm text-red-500 mt-1">{formErr.messageErr}</p>
              <p className="text-sm text-red-500 mt-1">{formErr.fullErr}</p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-medium shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  )
}

export default Contact
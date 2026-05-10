import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#0A0A0A]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-0 w-[250px] h-[250px] bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <p className="text-orange-400 uppercase tracking-[4px] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Passionate About Building
            Modern & Interactive Experiences
          </h2>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
          >

            <p className="text-zinc-300 leading-relaxed text-lg">
              I’m a full stack developer focused on creating
              clean, responsive, and visually polished web applications.
              I enjoy combining modern frontend design with scalable backend
              architecture to build experiences that feel smooth and intuitive.
            </p>

            <p className="text-zinc-500 leading-relaxed mt-6">
              Currently exploring advanced frontend interactions,
              animations, and AI-integrated applications while continuously
              improving my MERN stack skills.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-3">
                3+
              </h3>

              <p className="text-zinc-400">
                Projects Built
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-3">
                MERN
              </h3>

              <p className="text-zinc-400">
                Stack Focused
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-3">
                UI
              </h3>

              <p className="text-zinc-400">
                Design Oriented
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-3">
                AI
              </h3>

              <p className="text-zinc-400">
                Exploring Integrations
              </p>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About
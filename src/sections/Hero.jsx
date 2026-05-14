import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#0A0A0A]">

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      {/* ORANGE GLOW */}
      <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-400/10 blur-3xl rounded-full" />

      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute text-[110px] md:text-[200px] blur-[1px] font-black text-white/[0.04] uppercase leading-none select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        HIBA
      </h1>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">



        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 items-center min-h-[80vh]">

          {/* LEFT SIDE */}
          <div>

            {/* Moving upward */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/10 px-4 py-2 rounded-full mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />

              <span className="text-sm text-orange-300">
                Open to Opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-orange-400 uppercase tracking-[4px] mb-4 text-sm"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              Building Modern
              <span className="block text-orange-400">
                Web Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-6"
            >
              I create clean, interactive, and visually polished
              web applications using modern technologies
              and thoughtful user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-2xl font-medium shadow-[0_0_40px_rgba(249,115,22,0.35)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/10 hover:border-orange-400 transition px-7 py-3 rounded-2xl font-medium"
              >
                Contact Me
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden md:flex justify-center"
          >

            {/* GLOW */}
            <div className="absolute w-[340px] h-[330px] bg-orange-500/20 blur-3xl rounded-full" />

            {/* MAIN CARD */}
            <div className="relative w-[370px] h-[450px] rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden shadow-2xl">

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-500/20 to-transparent" />

              {/* INNER CONTENT */}
              <div className="relative h-full flex flex-col justify-between p-8">

                <div>

  <div className="w-20 h-[4px] rounded-full bg-gradient-to-r from-orange-400 to-orange-200 mb-8 shadow-[0_0_20px_rgba(249,115,22,0.5)]" />

  <h3 className="text-3xl font-bold leading-[1.1] mb-5">
    Focused on
    <span className="block mt-2 text-orange-400">
      MERN Stack
    </span>
  </h3>

  <p className="text-zinc-400 leading-relaxed text-[15px]">
    Building scalable, responsive, and visually
    polished web applications with modern
    frontend and backend technologies.
  </p>

</div>

                {/* BOTTOM TAGS */}
                <div className="flex flex-wrap gap-3">

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    Node.js
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    MongoDB
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    Express.js
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    JWT
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Hero
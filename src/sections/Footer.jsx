import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A]">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[200px] bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >

          {/* LEFT */}
          <div>

            <h3 className="text-2xl font-semibold mb-2">
              HIBA
            </h3>

            <p className="text-zinc-500 text-sm">
              Building modern and interactive digital experiences.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">

            <a
              href="#about"
              className="hover:text-orange-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-orange-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-orange-400 transition"
            >
              Contact
            </a>

          </div>

        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-zinc-600"
        >
          © 2026 Hiba. All rights reserved.
        </motion.div>

      </div>

    </footer>
  )
}

export default Footer
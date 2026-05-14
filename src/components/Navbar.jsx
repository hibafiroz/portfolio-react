import { motion, AnimatePresence } from "framer-motion"
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-6xl mx-auto px-5 pt-4">

        <div className="flex items-center justify-between h-14 px-5 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">

          {/* LOGO */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-semibold tracking-wide"
          >
            HIBA FIROZ
          </motion.h2>

          {/* DESKTOP NAV */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-6 text-sm text-zinc-400"
          >
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-orange-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </motion.nav>

          {/* DESKTOP BUTTON */}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            href="#contact"
            className="hidden md:flex items-center gap-2 border border-white/10 hover:border-orange-400 transition px-4 py-2 rounded-full text-sm"
          >
            Let’s Talk
            <FiArrowUpRight size={16} />
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden"
            >

              <div className="flex flex-col p-6 text-zinc-300">

                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="py-4 border-b border-white/10 hover:text-orange-400 transition"
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="py-4 border-b border-white/10 hover:text-orange-400 transition"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="py-4 border-b border-white/10 hover:text-orange-400 transition"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="py-4 hover:text-orange-400 transition"
                >
                  Contact
                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>
  )
}

export default Navbar
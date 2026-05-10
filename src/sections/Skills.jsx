import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "Firebase",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "MongoDB Atlas",
      "Vercel"
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden bg-[#0A0A0A]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-20 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />

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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Technologies & Tools
            I Work With
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden transition"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent" />

              <div className="relative z-10">

                <h3 className="text-2xl font-semibold mb-8">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill, skillIndex) => (

                    <span
                      key={skillIndex}
                      className="px-6 py-2 rounded-full border border-white/10 bg-black/30 text-zinc-300 text-sm hover:border-orange-400 hover:text-white transition"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills
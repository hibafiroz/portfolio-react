import { motion } from "framer-motion"

import hirehub from "../assets/projects/image.png"

const projects = [
  {
    title: "Job Portal Platform",
    description:
      "A modern MERN-based job portal with authentication, role-based access, admin dashboard, and responsive UI.",

    image: hirehub,

    tech: ["React", "Node.js", "MongoDB", "Mongoose", "Express", "Framer Motion"],

    live: "https://hirehub-app-psi.vercel.app",
    github: "https://github.com/hibafiroz/hirehub-app",
  }
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-[#0A0A0A]"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />

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
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Selected Work &
            Creative Development Projects
          </h2>

        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03]"
            >

              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-10 flex flex-col justify-center">

                  <h3 className="text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-3 mb-10">

                    {project.tech.map((item, techIndex) => (

                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full border border-white/10 bg-black/30 text-sm text-zinc-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-4">

                    <a
                      href={project.live} target="blank"
                      className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-medium"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github} target="blank"
                      className="border border-white/10 hover:border-orange-400 transition px-6 py-3 rounded-xl font-medium"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
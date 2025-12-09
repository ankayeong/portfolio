"use client"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

const cardHover = {
  hover: { scale: 1.05, y: -5, transition: { duration: 0.28 } },
}

const vercelProjects = [
  {
    title: "Clerk TEST",
    href: "https://clerk-app-1-five.vercel.app/",
    image: "/class.png",
  },
  {
    title: "CRUD",
    href: "https://crud1-pied.vercel.app/",
    image: "/crud.png",
  },
  {
    title: "Team Prpject-ToDo List",
    href: "https://todo2-main.vercel.app/main",
    image: "/todo.png",
  },
  {
    title: "Shopping mall",
    href: "https://shopping-tan-ten.vercel.app/",
    image: "/app.jpg",
  },
]

export default function Projects({ fadeIn }: { fadeIn: Variants }) {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto flex flex-col gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#2563EB]">PROJECTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vercelProjects.map((project) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col justify-between cursor-pointer"
            variants={cardHover}
            whileHover="hover"
          >
            <h3 className="text-xl font-bold mb-2 text-[#2563EB]">{project.title}</h3>
            <div className="relative h-48 mb-4 w-full rounded-xl overflow-hidden bg-slate-50">
              <Image src={project.image} alt={`${project.title} preview`} fill style={{ objectFit: "cover" }} />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

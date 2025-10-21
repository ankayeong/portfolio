"use client"
import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"
import { Repository } from "@/types/repo"

const cardHover = {
  hover: { scale: 1.05, y: -5, transition: { duration: 0.28 } },
}

export default function Projects({fadeIn, repos, loading}: {
  fadeIn: Variants
  repos: Repository[]
  loading: boolean
}) {
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
        {/* Assignment */}
        <motion.a
          href="https://clerk-app-1-five.vercel.app/"
          className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col justify-between cursor-pointer"
          variants={cardHover}
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-2 text-[#2563EB]">ASSIGNMENT</h3>
          <div className="relative h-48 mb-4 w-full rounded-xl overflow-hidden">
            <Image src="/class.png" alt="Class Example" fill style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-gray-600 text-sm md:text-base">웹 보안 프로그래밍 수업 과제 예제</p>
        </motion.a>

        {/* GitHub Repos */}
        {loading ? (
          <div className="col-span-full text-center text-gray-500">Loading repositories...</div>
        ) : (
          repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col justify-between cursor-pointer"
              variants={cardHover}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold mb-2 text-[#2563EB]">{repo.name}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{repo.description}</p>
              <div className="flex justify-between text-gray-600 mt-auto text-sm">
                <span className="flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
                <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
                <span className="flex items-center gap-1"><FaEye /> {repo.watchers_count}</span>
              </div>
            </motion.a>
          ))
        )}
      </div>
    </motion.section>
  )
}

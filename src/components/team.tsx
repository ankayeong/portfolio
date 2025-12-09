"use client"
import { motion, Variants } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoVercel } from "react-icons/io5"

const teamMembers = [
  {
    name: "김민준",
    role: "92410677 / 백엔드",
    github: "https://github.com/honguu-ai",
		link: "https://popo2-pzms-iqn8obdsj-honguu-ais-projects.vercel.app/"
  },
  {
    name: "양승권",
    role: "92410809 / 프론트엔드",
    github: "https://github.com/pokochy",
		link: "https://25-weld.vercel.app/"
  },
  {
    name: "정연서",
    role: "92410897 / 백엔드",
    github: "https://github.com/KeoJung",
		link: "team-project2-five.vercel.app"
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.08 } }),
}

export default function Team({ fadeIn }: { fadeIn: Variants }) {
  return (
    <motion.section
      id="team"
      className="max-w-6xl mx-auto p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#2563EB]">TEAM</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="group relative bg-white/80 border border-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-md overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 blur-3xl transition-all group-hover:scale-110" />
            <div className="flex flex-col gap-3 relative">
              <div>
                <h3 className="text-xl font-bold text-[#1D4ED8]">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>

              <div className="flex gap-3 pt-2 items-center">
                {member.github && (
									<div className="flex items-center">
										<a
											href={member.github}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-1 text-slate-600 hover:text-[#2563EB] text-sm"
										>
											<IoLogoGithub /> GitHub
										</a>
									</div>
                )}
							
                {member.link && (
									<div className="flex items-center">
										<a
											href={member.link}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-1 text-slate-600 hover:text-[#2563EB] text-sm"
										>
											<IoLogoVercel /> portfolio
										</a>
									</div>
                )}
						</div>             
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
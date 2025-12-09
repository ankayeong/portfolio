"use client"
import { Variants, motion } from "framer-motion"
import Image from "next/image"
import { FaUser, FaUniversity, FaBirthdayCake, FaHome, FaBrain, FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io"

const profileDetails = [
  { icon: <FaUser className="text-[#2563EB]" />, label: "이름", value: "안가영" },
  { icon: <FaUniversity className="text-[#2563EB]" />, label: "학교/전공", value: "중부대학교 / 정보보호학전공" },
  { icon: <FaBirthdayCake className="text-[#2563EB]" />, label: "생일", value: "03.04" },
  { icon: <FaBrain className="text-[#2563EB]" />, label: "MBTI", value: "ISFJ" },
  { icon: <FaHome className="text-[#2563EB]" />, label: "거주지", value: "경기도 파주시" },
]

const contactLinks = [
  {
    icon: <FaPhoneAlt />,
    label: "전화번호",
    value: "010-7164-2389",
  },
  {
    icon: <IoLogoInstagram />,
    label: "Instagram",
    value: "@young__034",
    href: "https://www.instagram.com/young__034/",
  },
  {
    icon: <IoLogoGithub />,
    label: "GitHub",
    value: "ankayeong",
    href: "https://github.com/ankayeong?tab=repositories",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "rkdud2389@naver.com",
  },
]

const skills = ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"]

export default function Profile({ fadeIn }: { fadeIn: Variants }) {
  return (
    <motion.section
      id="profile"
      className="max-w-6xl mx-auto p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <motion.div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 opacity-80" />
        <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-indigo-200/60 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1fr,1.2fr] gap-10 p-10">
          <div className="flex flex-col items-center text-center gap-6">
            <motion.div className="relative" whileHover={{ scale: 1.04 }}>
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 via-blue-100 to-white rounded-full blur-lg" />
              <Image
                src="/default-image.jpg"
                alt="Profile"
                width={240}
                height={240}
                className="relative rounded-full object-cover border-4 border-white shadow-lg"
              />
            </motion.div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2563EB]">PROFILE</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 rounded-full bg-blue-50 text-[#1E3A8A] border border-blue-100 text-sm font-medium shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {profileDetails.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/70 p-4 rounded-2xl border border-white/60 shadow-sm"
                >
                  <span className="text-xl">{icon}</span>
                  <div className="leading-tight">
                    <p className="text-sm text-slate-500 font-semibold">{label}</p>
                    <p className="text-base text-slate-800 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.3fr,1fr] gap-4">

              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-5 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  {contactLinks.map(({ icon, label, value, href }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-lg">{icon}</span>
                          <div className="leading-tight">
                            <p className="text-sm text-blue-100">{label}</p>
                            <p className="text-base font-semibold">{value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{icon}</span>
                          <div className="leading-tight">
                            <p className="text-sm text-blue-100">{label}</p>
                            <p className="text-base font-semibold">{value}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
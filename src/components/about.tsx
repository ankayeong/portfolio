"use client"
import { motion } from "framer-motion"
import { FaUser, FaUniversity, FaBirthdayCake, FaHome, FaBrain } from "react-icons/fa"

export default function About({ fadeIn }: { fadeIn: any }) {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100" whileHover={{ scale: 1.01 }}>
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2563EB] mb-6">ABOUT ME</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div className="lg:w-1/3 flex justify-center" whileHover={{ scale: 1.03 }}>
            <img src="/default-image.jpg" alt="Profile" className="w-64 h-64 rounded-full object-cover" />
          </motion.div>

          <div className="lg:w-2/3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
              <div className="flex items-center gap-3"><FaUser className="text-[#2563EB]" /> <span><strong>이름</strong> | 안가영</span></div>
              <div className="flex items-center gap-3"><FaUniversity className="text-[#2563EB]" /> <span><strong>학교/전공</strong> | 중부대학교 / 정보보호학전공</span></div>
              <div className="flex items-center gap-3"><FaBirthdayCake className="text-[#2563EB]" /> <span><strong>생일</strong> | 03.04</span></div>
              <div className="flex items-center gap-3"><FaBrain className="text-[#2563EB]" /> <span><strong>MBTI</strong> | ISFJ</span></div>
              <div className="flex items-center gap-3"><FaHome className="text-[#2563EB]" /> <span><strong>거주지</strong> | 경기도 파주시</span></div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-2xl font-semibold text-[#1D4ED8] mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.06 }} className="bg-[#DBEAFE] text-[#1E3A8A] px-4 py-2 rounded-xl">Next.js</motion.div>
                <motion.div whileHover={{ scale: 1.06 }} className="bg-[#DBEAFE] text-[#1E3A8A] px-4 py-2 rounded-xl">TailwindCSS</motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

"use client"
import { motion } from "framer-motion"

export default function Main({ fadeIn }: { fadeIn: any }) {
  return (
    <motion.section
      id="main"
      className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center items-center text-center p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 text-[#2563EB]"
        whileHover={{ scale: 1.03 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p className="text-gray-600 text-lg md:text-xl max-w-2xl" whileHover={{ scale: 1.01 }}>
        This is an assignment for web security programming class.
      </motion.p>
    </motion.section>
  )
}

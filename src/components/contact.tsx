"use client"
import { motion } from "framer-motion"
import { IoIosCall, IoIosMail } from "react-icons/io"

export default function Contact({ fadeIn }: { fadeIn: any }) {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto bg-white rounded-xl p-10 flex flex-col items-center gap-6 shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-[#2563EB] mb-2">CONTACT</h2>

      <div className="flex flex-col items-center gap-4 text-lg md:text-xl text-[#2563EB]">
        <div className="flex items-center gap-3">
          <IoIosCall size={24} />
          <p>010-7164-2389</p>
        </div>

        <div className="flex items-center gap-6">
          <a className="flex items-center gap-2 hover:text-pink-500 transition-colors" href="https://www.instagram.com/young__034/" target="_blank" rel="noreferrer">
            <img className="w-6" src="/Instagram_icon.png" alt="instagram" />
            @young__034
          </a>

          <a className="flex items-center gap-2 hover:text-gray-800 transition-colors" href="https://github.com/ankayeong?tab=repositories" target="_blank" rel="noreferrer">
            <img className="w-6" src="/github.png" alt="github" />
            ankayeong
          </a>
        </div>

        <div className="flex items-center gap-3">
          <IoIosMail size={24} />
          <p>rkdud2389@naver.com</p>
        </div>
      </div>
    </motion.section>
  )
}

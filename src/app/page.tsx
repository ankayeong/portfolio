"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Repository } from "@/types/repo"

// 섹션 불러오기
import MainSection from "@/components/main"
import AboutSection from "@/components/about"
import ProjectsSection from "@/components/projects"
import ContactSection from "@/components/contact"

const username = "ankayeong"

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -88
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const data: Repository[] = await response.json()
        setRepos(data)
      } catch (e) {
        console.error("Failed to fetch repos", e)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 text-[#1E293B] font-sans">
      {/* 헤더 */}
      <header className="w-full text-center py-12 text-5xl md:text-6xl text-[#2563EB] font-semibold">
        Portfolio
      </header>

      {/* 메뉴바 */}
      <nav className="sticky top-0 z-40 flex justify-center gap-8 py-4 bg-transparent backdrop-blur-sm">
        {["main", "about", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="hover:underline uppercase font-medium text-[#1E293B] transition-colors hover:text-[#1D4ED8]"
          >
            {section}
          </button>
        ))}
      </nav>

      {/* 본문 */}
      <main className="space-y-20 px-6 md:px-20 py-10">
        <MainSection fadeIn={fadeIn} />
        <AboutSection fadeIn={fadeIn} />
        <ProjectsSection fadeIn={fadeIn} repos={repos} loading={loading} />
        <ContactSection fadeIn={fadeIn} />
      </main>
    </div>
  )
}

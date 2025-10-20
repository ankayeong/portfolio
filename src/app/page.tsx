"use client";
import { motion } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-orange-50">
      {/* 로고 */}
      <div className="w-full text-center py-10 text-7xl text-orange-600" style={{fontFamily: '"Playfair Display", serif'}}>
        Portfolio
      </div>

      {/* 메뉴바 */}
      <nav className="sticky top-0 z-30 flex justify-center gap-10 py-4 bg-orange-50 text-orange-600">
        <button onClick={() => scrollToSection("main")} className="hover:underline">MAIN</button>
        <button onClick={() => scrollToSection("about")} className="hover:underline">ABOUT</button>
        <button onClick={() => scrollToSection("projects")} className="hover:underline">PROJECTS</button>
        <button onClick={() => scrollToSection("contact")} className="hover:underline">CONTACT</button>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="">
        {/*main*/}
        <motion.section id="main"
          className="flex flex-col justify-center items-center min-h-screen text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}>
          <h1 className="text-4xl font-bold mb-4 text-orange-600">
            Welcome to my portfolio site
          </h1>
          <p className="text-gray-600">
            This is an assignment for web security programming class.
          </p>
        </motion.section>

        {/*about*/}
        <motion.section id="about"
          className="relative justify-center items-center min-h-screen text-center bg-sky-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}>
            <h2 className="text-9xl pt-20 font-semibold text-orange-50">ABOUT</h2>
            <img src="/default-image.jpg" className="absolute left-90 bottom-35 h-68 rounded-full"/>
            <div className="absolute right-70 bottom-30 text-left text-2xl text-white" style={{ lineHeight: "4rem" }}>
              <p>이름 | 안가영</p>
              <p>학교/전공 | 중부대학교/정보보호학전공</p>
              <p>생일 | 03.04</p>
              <p>MBTI | ISFJ</p>
              <p>거주지 | 경기도 파주시</p>
            </div>
        </motion.section>

        {/*projects*/}
        <motion.section id="projects"
          className="= flex justify-center items-center min-h-screen text-center gap-28 p-30 bg-yellow-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}>
            <p className="[writing-mode:vertical-rl] [text-orientation:upright] font-extrabold text-orange-600 text-4xl">PROJECT</p>
            {/* 깃허브 */}
            <div className="flex flex-col items-center hover:text-white">
              <h1 className="text-6xl font-bold pb-4">GITHUB</h1>
              <a href="https://github.com/ankayeong">
                <img src="https://github.com/ankayeong.png" alt="GitHub Profile" className="h-48 rounded-2xl"/>
              </a>
            </div>

            {/* 수업예제 */}
            <div className="flex flex-col items-center hover:text-white">
              <h1 className="text-6xl font-bold pb-4">ASSIGNMENT</h1>
              <a href="https://clerk-app-1-five.vercel.app/">
                <img className="h-48 rounded-2xl" src="/class.png" alt="Class Example"/>
              </a>
            </div>
        </motion.section>


        {/*contact*/}
        <motion.section id="contact"
          className="relative min-h-screen text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}>
            <h2 className="absolute top-10 left-10 text-9xl font-semibold">Contact</h2>

            <div className="absolute bottom-10 right-10 text-right text-3xl leading-loose">
              <div className="flex items-center justify-end space-x-2">
                <IoIosCall size={30} />
                <p>010-7164-2389</p>
              </div>

              <a href="https://www.instagram.com/young__034/">
                <img className="absolute w-8 bottom-18 right-53" src="/Instagram_icon.png" alt="instagram"/>
                  @young__034
              </a>

              <div className="flex items-center justify-end space-x-2">
                <IoIosMail size={32} />
                <p>rkdud2389@naver.com</p>
              </div>
              
            </div>           
        </motion.section>
      </main>
    </div>
  );
}

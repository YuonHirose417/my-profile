'use client'

import { motion } from "framer-motion"
import { ReactNode } from 'react';
import Image from 'next/image';

import { FaGithub, FaReact, FaPython, FaNodeJs,FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa'; 
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiAdobepremierepro, SiLinkedin, SiC } from 'react-icons/si'; 


interface Skill {
  name: string;
  icon: ReactNode;
}


const skills: Skill[] = [
  { name: 'C', icon: <SiC size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  
  { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro size={40} /> }, 
];

export default function Home() {
  return (
   
    <div className="bg-gray-900 text-gray-200 font-mono">
      
      {/* ヘッダー */}
      <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-400">Who Am I</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">

        {/* 自己紹介 */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <Image
              src="/S__324165643.jpg"
              alt="プロフィール画像"
              width={250} 
              height={300} 
              className="w-80 h-80 rounded-full object-cover border-4 border-gray-700 mx-auto mb-6"
            />
            
            <h2 className="text-5xl font-bold">廣瀬 優穏</h2>
            <p className="text-xl text-gray-400 max-w-2xl mt-4">
              中京大学 工学部情報工学科 ラシキア研究室所属
            </p>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-green-400 mr-2">&gt;</span>ポートフォリオをご覧いただきありがとうございます。現在、内容を拡充中です。
          </motion.p>
          
          {/* SNSアイコンリンク */}
          <motion.div
            className="flex space-x-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://crowdworks.jp/public/employees/6310175"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CrowdWorks Profile"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <SiLinkedin size={40} />
            </a>
            <a
              href="https://github.com/YuonHirose417"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaGithub size={40} />
            </a>
          </motion.div>
        </section>

        {/* スキル */}
        <section id="skills" className="py-24 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12"><span className="text-green-400"></span> Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg space-y-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* プロジェクト */}
        <section id="projects" className="py-24">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12"><span className="text-green-400"></span> Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow border border-gray-700">
                <h3 className="text-2xl font-semibold mb-3 text-green-400">プロジェクト A</h3>
                <p className="text-gray-400 mb-4">Next.js と Tailwind CSS で作った Web アプリケーションです。</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 text-sm rounded-md">Next.js</span>
                  <span className="px-2 py-1 bg-gray-700 text-sm rounded-md">Tailwind CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-green-400"><FaGithub size={24} /></a>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow border border-gray-700">
                <h3 className="text-2xl font-semibold mb-3 text-green-400">プロジェクト B</h3>
                <p className="text-gray-400 mb-4">Python で構築したバックエンドプロジェクトです。</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 text-sm rounded-md">Python</span>
                </div>
                <div className="flex space-x-4">
                   <a href="#" className="text-gray-400 hover:text-green-400"><FaGithub size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact" className="py-24 bg-gray-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-center mb-8"><span className="text-green-400"></span> Contact</h2>
            <p className="text-lg text-gray-400 mb-6">
              ご連絡は下記のリンクからお願いいたします。
            </p>
            <div className="flex justify-center space-x-8 mt-10">
              <a
                href="mailto:hirose@example.com"
                className="inline-block px-8 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/YuonHirose417"
                className="inline-block px-8 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="py-6 text-center text-gray-500 bg-gray-900">
        © 2025 廣瀬 優穏
      </footer>
    </div>
  )
}
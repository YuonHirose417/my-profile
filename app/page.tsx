'use client'

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* ヘッダー */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">廣瀬 優穏</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">自己紹介</a>
            <a href="#skills" className="hover:text-blue-600">スキル</a>
            <a href="#projects" className="hover:text-blue-600">プロジェクト</a>
            <a href="#contact" className="hover:text-blue-600">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">

        {/* 自己紹介 */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.h2 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            こんにちは、廣瀬 優穏です
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ソフトウェア開発を学ぶ学生です。Next.js、TypeScript、Tailwind CSS を使ったモダンな Web アプリケーションを構築しています。
          </motion.p>
        </section>

        {/* スキル */}
        <section id="skills" className="py-24 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12">スキル</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-100 rounded-lg">Next.js</div>
            <div className="p-6 bg-gray-100 rounded-lg">TypeScript</div>
            <div className="p-6 bg-gray-100 rounded-lg">Tailwind CSS</div>
            <div className="p-6 bg-gray-100 rounded-lg">Python</div>
            <div className="p-6 bg-gray-100 rounded-lg">React</div>
            <div className="p-6 bg-gray-100 rounded-lg">Node.js</div>
            <div className="p-6 bg-gray-100 rounded-lg">Docker</div>
            <div className="p-6 bg-gray-100 rounded-lg">SQL / NoSQL</div>
          </div>
        </section>

        {/* プロジェクト */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-12">プロジェクト</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">プロジェクト A</h3>
              <p className="text-gray-600">Next.js と Tailwind CSS で作った Web アプリケーションです。</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">プロジェクト B</h3>
              <p className="text-gray-600">Python で構築したバックエンドプロジェクトです。</p>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact" className="py-24 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12">お問い合わせ</h2>
          <p className="text-center text-gray-700 mb-6">
            ご連絡は <a href="mailto:hirose@example.com" className="text-blue-600 underline">メール</a> または GitHub からお願いいたします。
          </p>
          <div className="text-center">
            <a href="https://github.com/YuonHirose417" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">GitHub</a>
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="py-6 text-center text-gray-500 bg-white">
        © 2025 廣瀬 優穏
      </footer>
    </div>
  )
}




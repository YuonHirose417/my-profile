import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <img
          src="https://via.placeholder.com/120"
          alt="profile"
          className="mx-auto rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">ゆんぼ</h1>
        <p className="text-gray-600 mb-6">情報系学生 / プログラミング勉強中</p>
        <div className="space-x-4">
          <a
            href="https://x.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  )
}


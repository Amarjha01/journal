import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiUploadCloud, FiUsers, FiBookOpen } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Welcome to the{" "}
            <span className="text-blue-700">
              International Journal of Interdisciplinary Research
            </span>{" "}
            in Chemistry & Biology
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A peer-reviewed open-access journal dedicated to publishing innovative research
            and insights in chemistry, biology, and interdisciplinary sciences.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Latest Issue */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-transform transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FiBookOpen size={28} />
              <h2 className="font-semibold text-xl">Latest Issue</h2>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Volume 3, Issue 12</span> — October 2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Explore the latest peer-reviewed articles advancing research in chemical and biological sciences.
            </p>
            <a
              href="/articles/latest-issues"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              View Current Issue →
            </a>
          </div>

          {/* Card 2 - Submit Article */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-transform transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FiUploadCloud size={28} />
              <h2 className="font-semibold text-xl">Submit Your Article</h2>
            </div>
            <p className="text-gray-700">
              Share your latest research findings with the world. Submit your manuscript easily online.
            </p>
            <a
              href="/publish/submit-article"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Submit Now →
            </a>
          </div>

          {/* Card 3 - Editorial Board */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-transform transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FiUsers size={28} />
              <h2 className="font-semibold text-xl">Editorial Board</h2>
            </div>
            <p className="text-gray-700">
              Meet our distinguished editorial team comprising researchers, academicians, and professionals.
            </p>
            <a
              href="/about/editorial-board"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Meet the Team →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

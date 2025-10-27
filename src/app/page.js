import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the International Journal of Interdisciplinary Research in Chemistry & Biology
        </h1>
        <p className="text-lg mb-8">
          A peer-reviewed journal publishing research articles in chemistry and biology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded shadow">
            <h2 className="font-semibold text-xl mb-2">Latest Issue</h2>
            <p>Issue 12, Volume 3 – October 2025</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="font-semibold text-xl mb-2">Submit Your Article</h2>
            <p>Click the "Submit Your Article" link to upload your manuscript.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="font-semibold text-xl mb-2">Editorial Board</h2>
            <p>Meet our esteemed editorial members from around the world.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

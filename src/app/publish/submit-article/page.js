import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function SubmitArticle() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Submit Your Research Article</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Author Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="John Doe" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Affiliation</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="University/Institute" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" className="w-full border p-2 rounded" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Article Title</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Title of your research" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Upload Manuscript</label>
            <input type="file" className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit Article
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

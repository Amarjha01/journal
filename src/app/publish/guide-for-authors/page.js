import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function GuideForAuthors() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Guide for Authors</h1>
        <p className="mb-4">
          Authors are invited to submit original research articles, reviews, and short communications in chemistry and biology. Manuscripts should be in English and follow the formatting guidelines outlined below.
        </p>
        <ul className="list-disc ml-6">
          <li>Word document or PDF format</li>
          <li>Include abstract, keywords, introduction, methods, results, discussion, and references</li>
          <li>References should follow APA style</li>
          <li>Figures and tables should be high-resolution</li>
        </ul>
        <p className="mt-4">
          For full instructions, please download our <a href="#" className="text-blue-600 underline">author template</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Aims() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Aims & Scope</h1>
        <p className="mb-4">
          The International Journal of Interdisciplinary Research in Chemistry & Biology publishes original research articles, reviews, and short communications that integrate chemistry and biology. Topics include biochemistry, molecular biology, chemical biology, biotechnology, and related interdisciplinary fields.
        </p>
        <p>
          Our mission is to provide a platform for researchers worldwide to share high-quality research that bridges these disciplines.
        </p>
      </main>
      <Footer />
    </div>
  );
}

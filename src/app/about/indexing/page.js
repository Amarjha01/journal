import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Indexing() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Journal Indexing & Insight</h1>
        <p className="mb-4">
          The journal is indexed in major scientific databases including:
        </p>
        <ul className="list-disc ml-6">
          <li>Scopus</li>
          <li>Web of Science</li>
          <li>PubMed</li>
          <li>Directory of Open Access Journals (DOAJ)</li>
        </ul>
        <p className="mt-4">
          The journal maintains a high standard of peer-reviewed research and aims to contribute to the global scientific community.
        </p>
      </main>
      <Footer />
    </div>
  );
}

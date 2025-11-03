import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Indexing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Journal Indexing & Insight
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            The <strong>International Journal of Interdisciplinary Research in Basic Sciences and Engineering (IJIRBSE)</strong> 
            is committed to promoting high-quality research across multiple scientific disciplines.
            The journal follows a rigorous double-blind peer review process and publishes open-access 
            articles to ensure wide dissemination of knowledge.
          </p>

          <p>
            The journal is currently under the process of inclusion in major academic and scientific indexing databases. 
            Once approved, the indexing details will be regularly updated on the journal website.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            Current Indexing Status
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {[
              "Research Gate (Under Process)",
              "Google Scholar (Under Process)",
              "Chemical Abstract (Under Process)",
              "Index Copernicus (Under Process)",
              "Scopus (Under Process)",
            ].map((index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition text-center"
              >
                {index}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            Journal Insight
          </h2>
          <p className="mb-3">
            <strong>ISSN No.:</strong> Under Process
          </p>
          <p className="mb-3">
            <strong>Subject Areas:</strong> Chemistry, Mathematics, Physics, Nanoscience, Statistics, Biochemistry, 
            Biological Science, Natural Science, General Study Skills, Life Sciences, Earth Science, Material Science, 
            Chemical Engineering, Petroleum Engineering, Artificial Intelligence, Environmental Engineering, 
            Electrical Engineering, Civil Engineering, Industrial Engineering, Computer Science and Technology, 
            Engineering and Technologies, Food and Agricultural Science, Mechanical Engineering, Renewable Energy Engineering.
          </p>
          <p className="mb-3">
            <strong>Article Publishing Options:</strong> Open Access
          </p>
          <p>
            <strong>Publication Timeline:</strong> 30–90 days
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

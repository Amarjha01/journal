import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function GuideForAuthors() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Guide for Authors
        </h1>

        {/* Intro */}
        <section className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Authors are invited to submit original research articles, review papers, and short
            communications that align with the scope of the{" "}
            <strong>
              International Journal of Interdisciplinary Research in Basic Sciences and
              Engineering (IJIRBSE)
            </strong>
            . Manuscripts must be written in clear English and conform to the following
            submission guidelines.
          </p>
        </section>

        {/* Section 1: Types of Manuscripts */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            1. Types of Manuscripts
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              <strong>Original Research Articles:</strong> Full-length papers presenting novel
              experimental or theoretical results.
            </li>
            <li>
              <strong>Review Articles:</strong> Comprehensive overviews of recent developments
              in specific fields.
            </li>
            <li>
              <strong>Short Communications / Technical Notes:</strong> Concise reports of new
              findings or methods.
            </li>
          </ul>
        </section>

        {/* Section 2: Manuscript Preparation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            2. Manuscript Preparation
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>File Type:</strong> Microsoft Word (.doc or .docx)
            </p>
            <p>
              <strong>Font:</strong> Times New Roman, 12-point, double-spaced
            </p>
            <p>
              <strong>Page Layout:</strong> A4 size, 1-inch margins
            </p>
            <p>
              <strong>Length:</strong> Typically 6–15 pages for full articles
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
            Structure of the Manuscript
          </h3>
          <ul className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Title Page — Include article title, author(s), and affiliation(s)</li>
            <li>Abstract — 150–250 words summarizing objectives, methods, results, and conclusions</li>
            <li>Keywords — 3–6 words reflecting main topics</li>
            <li>Introduction — Background, rationale, and objectives</li>
            <li>Materials and Methods — Sufficient detail for replication</li>
            <li>Results and Discussion — Present and interpret results clearly</li>
            <li>Conclusion — Summarize main findings and future directions</li>
            <li>Acknowledgments (optional)</li>
            <li>References — Follow APA, IEEE, or Vancouver style</li>
          </ul>
        </section>

        {/* Section 3: Figures and Tables */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            3. Figures and Tables
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Figures must be high-resolution (minimum 300 dpi)</li>
            <li>Tables should be editable (not images)</li>
            <li>Number figures and tables consecutively (e.g., Figure 1, Table 1)</li>
            <li>Provide descriptive captions for each</li>
          </ul>
        </section>

        {/* Section 4: Ethical Considerations */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            4. Ethical Considerations
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Manuscripts must be original and not under review elsewhere</li>
            <li>All authors should have contributed significantly to the research</li>
            <li>Plagiarism or duplicate publication will lead to rejection</li>
            <li>
              Research involving humans or animals must comply with ethical guidelines and include
              relevant approvals
            </li>
          </ul>
        </section>

        {/* Section 5: Submission Process */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            5. Submission Process
          </h2>
          <p className="text-gray-700 mb-4">
            Authors can choose from the following two methods to submit their manuscripts:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md mb-6">
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Option 1: Submit via Platform</h3>
            <p className="text-gray-700">
              Authors can directly upload their manuscripts through our secure online submission
              system at{" "}
              <a
                href="submit-article"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                Submit Article
              </a>
              . The platform allows file uploads and provides confirmation once the submission is
              successful.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md">
            <h3 className="font-semibold text-lg text-green-800 mb-2">Option 2: Submit via Email</h3>
            <p className="text-gray-700">
              Authors may also submit their manuscripts through email to{" "}
              <a
                href="mailto:editor@ijirbse.org"
                className="text-blue-600 underline hover:text-blue-800"
              >
                editor@ijirbse.org
              </a>
              . All email submissions undergo an initial editorial screening followed by a{" "}
              <strong>double-blind peer review</strong>.
            </p>
          </div>

          <p className="text-gray-700 mt-6">
            For complete formatting details, download the{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Author Template
            </a>
            .
          </p>
        </section>

        {/* Section 6: Copyright */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            6. Copyright & Licensing
          </h2>
          <p className="text-gray-700">
            Upon acceptance, authors must sign a copyright transfer agreement or open-access
            license (e.g., Creative Commons Attribution (CC BY 4.0)). Authors retain the right
            to use their work with proper citation.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Aims() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Aims & Scope
        </h1>

        <section className="space-y-6 text-justify text-gray-700 leading-relaxed">
          <p>
            The <strong>International Journal of Interdisciplinary Research in Basic Sciences and Engineering (IJIRBSE)</strong> 
            is devoted to the publication of high-quality original research articles, reviews, and short communications 
            that advance knowledge in Basic Sciences, Engineering, and their interfaces.
          </p>

          <p>
            The Journal provides a platform for researchers to explore innovative ideas in Basic Sciences, Engineering, 
            and Interdisciplinary Research. The following areas reflect, but are not limited to, the scope of the journal. 
            Any topic fitting within the scope of the journal is welcomed for submission.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
            Scope of the Journal
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
            {[
              "Chemistry",
              "Chemical Engineering",
              "Mathematics",
              "Petroleum Engineering",
              "Physics",
              "Artificial Intelligence",
              "Nanoscience",
              "Environmental Engineering",
              "Statistics",
              "Electrical Engineering",
              "Biochemistry",
              "Civil Engineering",
              "Biological Science",
              "Industrial Engineering",
              "Natural Science",
              "Computer Science and Technology",
              "General Study Skills",
              "Engineering and Technologies",
              "Life Sciences",
              "Food and Agricultural Science",
              "Earth Science",
              "Mechanical Engineering",
              "Material Science",
              "Renewable Energy Engineering",
            ].map((field) => (
              <div
                key={field}
                className="bg-gray-100 hover:bg-gray-200 transition rounded-lg p-3 text-center shadow-sm text-sm sm:text-base"
              >
                {field}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-4 text-gray-700">
          <p>
            <strong>Article Publishing Options:</strong> Open Access
          </p>
          <p>
            <strong>Publication Timeline:</strong> 30–90 days
          </p>
          <p>
            <strong>Indexing:</strong> Research Gate (Under process), Google Scholar (Under process), 
            Chemical Abstract (Under process), Index Copernicus (Under process), Scopus (Under process)
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

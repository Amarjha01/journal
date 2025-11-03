import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const editors = [
  {
    name: "Dr. Mohammad Arshad, M.Sc., Ph.D, MRSC, MACS",
    role: "Editor-in-Chief",
    affiliation: "Director of Research & Development, Al Fayha College, Al-Jubail, Saudi Arabia",
  },
  {
    name: "Dr. Mohammad Amir Khan",
    role: "Associate Editor",
    affiliation: "Galgotia University, Noida, India",
  },
  {
    name: "Dr. Mohammad Shoab",
    role: "Associate Editor",
    affiliation: "Shaqra University, Saudi Arabia",
  },
];

const boardMembers = [
  { name: "Dr. NurSabah Sarika Vakli", affiliation: "Ayden University, Turkey" },
  { name: "Dr. Iqbal Hussain", affiliation: "Jubail Industrial College, Saudi Arabia" },
  // Add more if provided later...
];

export default function EditorialBoard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Editorial Board
        </h1>

        {/* Editor-in-Chief & Associates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
            Editorial Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editors.map((editor) => (
              <div
                key={editor.name}
                className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{editor.name}</h3>
                <p className="italic text-gray-600 mb-1">{editor.role}</p>
                <p className="text-gray-700 text-sm">{editor.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Board Members */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
            Editorial Board Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-medium text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

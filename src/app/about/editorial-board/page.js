import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const editors = [
  { name: "Dr. Alice Smith", role: "Editor-in-Chief", affiliation: "University of Oxford" },
  { name: "Dr. John Doe", role: "Associate Editor", affiliation: "MIT" },
  { name: "Dr. Maria Garcia", role: "Associate Editor", affiliation: "University of Tokyo" },
];

export default function EditorialBoard() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Editorial Board</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editors.map((editor) => (
            <div key={editor.name} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-xl">{editor.name}</h2>
              <p className="italic">{editor.role}</p>
              <p>{editor.affiliation}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

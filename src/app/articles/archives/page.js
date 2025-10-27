import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const archiveData = [
  { volume: 3, issues: ["10", "11", "12"] },
  { volume: 2, issues: ["7", "8", "9"] },
  { volume: 1, issues: ["1", "2", "3", "4", "5", "6"] },
];

export default function Archives() {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Archives</h1>
        <div className="space-y-4">
          {archiveData.map((vol, idx) => (
            <div key={idx} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-xl">Volume {vol.volume}</h2>
              <p>Issues: {vol.issues.join(", ")}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

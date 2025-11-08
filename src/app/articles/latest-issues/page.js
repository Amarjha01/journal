const latestArticles = [
  { title: "Molecular Mechanisms of Enzyme Activity", author: "Alice Smith", issue: "Vol 3, Issue 12" },
  { title: "Novel Bioactive Compounds in Plants", author: "John Doe", issue: "Vol 3, Issue 12" },
  { title: "Computational Chemistry Approaches in Drug Design", author: "Maria Garcia", issue: "Vol 3, Issue 12" },
];

export default function LatestIssues() {
  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Latest Issues</h1>
        <div className="space-y-4">
          {latestArticles.map((article, idx) => (
            <div key={idx} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-xl">{article.title}</h2>
              <p className="italic">{article.author}</p>
              <p>{article.issue}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

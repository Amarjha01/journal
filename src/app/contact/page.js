import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          For inquiries related to submissions, editorial policies, or general questions, please contact us using the form below.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" className="w-full border p-2 rounded" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea className="w-full border p-2 rounded" rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

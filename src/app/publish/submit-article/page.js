"use client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SubmitArticle() {
  const [formData, setFormData] = useState({
    authorName: "",
    affiliation: "",
    email: "",
    title: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert("Please upload a manuscript file before submitting.");
      return;
    }

    const data = new FormData();
    data.append("authorName", formData.authorName);
    data.append("affiliation", formData.affiliation);
    data.append("email", formData.email);
    data.append("title", formData.title);
    data.append("article", formData.file); 

    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:5000/api/uploadarticle", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success('Your article has been submitted successfully!');
        setFormData({
          authorName: "",
          affiliation: "",
          email: "",
          title: "",
          file: null,
        });
      } else {
        toast.error('Submission failed. Please try again.')
      }
    } catch (error) {
      console.error("Error submitting article:", error);
      toast.error('Server error. Please try again later.')
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Toaster position="top-center" />
      <main className="grow flex justify-center items-center py-12 px-4">
        <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Submit Your Research Article
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Authors are invited to submit original manuscripts directly through this platform.
            Please ensure your article follows the{" "}
            <a
              href="guide-for-authors"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Guide for Authors
            </a>{" "}
            before submission.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold text-gray-800">
                Author Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 rounded"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-800">
                Affiliation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 rounded"
                placeholder="University/Institute"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 rounded"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-800">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 rounded"
                placeholder="Title of your research"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-800">
                Upload Manuscript <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 rounded"
                accept=".pdf,.doc,.docx"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Accepted formats: <strong>.docx</strong> or <strong>.pdf</strong> | Max size: 10MB
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold px-8 py-2.5 rounded-lg transition`}
              >
                {isSubmitting ? "Submitting..." : "Submit Article"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutItems = [
    { name: "Aims & Scope", link: "/about/aims" },
    { name: "Editorial Board", link: "/about/editorial-board" },
    { name: "Journal Indexing & Insight", link: "/about/indexing" },
  ];

  const publishItems = [
    { name: "Guide for Authors", link: "/publish/guide-for-authors" },
    { name: "Submit Your Research Article", link: "/publish/submit-article" },
  ];

  const articlesItems = [
    { name: "Latest Issues", link: "/articles/latest-issues" },
    { name: "Archives", link: "/articles/archives" },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-blue-700 hover:text-blue-800 transition"
        >
          IJIRBSE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Dropdown title="About the Journal" items={aboutItems} />
          <Dropdown title="Publish" items={publishItems} />
          <Dropdown title="Articles & Issues" items={articlesItems} />
          <Link
            href="/publish/submit-article"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Submit Article
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-blue-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 pb-4 animate-slideDown">
          <div className="flex flex-col space-y-2 pt-3">
            <Dropdown title="About the Journal" items={aboutItems} />
            <Dropdown title="Publish" items={publishItems} />
            <Dropdown title="Articles & Issues" items={articlesItems} />

            <Link
              href="/publish/submit-article"
              className="block px-6 py-2 hover:bg-blue-100 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Submit Article
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2 hover:bg-blue-100 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

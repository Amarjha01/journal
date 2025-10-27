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
    <nav className="bg-gray-300 text-black shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Journal Name</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Dropdown title="About the Journal" items={aboutItems} />
          <Dropdown title="Publish" items={publishItems} />
          <Dropdown title="Articles and Issues" items={articlesItems} />
          <Link href="/publish/submit-article" className="hover:text-blue-600">
            Submit Your Article
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white border-t border-gray-200">
          <Dropdown title="About the Journal" items={aboutItems} />
          <Dropdown title="Publish" items={publishItems} />
          <Dropdown title="Articles and Issues" items={articlesItems} />
          <Link href="/publish/submit-article" className="block px-4 py-2 hover:bg-blue-100">
            Submit Your Article
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-blue-100">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

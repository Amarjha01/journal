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
    <div className="sticky top-5 w-full flex justify-center items-center z-50">
      <nav className="backdrop-blur-xl bg-black/10  shadow-md w-[90vw] rounded-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold bg-linear-to-r from-[#0782df]/20 to-[#0b111d]/50 transition px-3 rounded-full bams-cop-blur-3xl"
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
              className=" hover:scale-105 transition-transform duration-100 ease-linear transform"
            >
              Submit Article
            </Link>
            <Link
              href="/contact"
              className=" hover:scale-105 transition-transform duration-100 ease-linear transform"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-100 hover:text-[#001BB7] transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-[100vw]"
          } md:hidden fixed top-20 right-0 w-full  bg-linear-to-br from-[#0782df] to-[#0b111d] rounded-2xl  transition-transform duration-300 ease-in-out transform overflow-x-hidden`}
        >
          <div className="flex flex-col space-y-4 pt-6 px-4  rounded-2xl z-50 h-full backdrop-blur-3xl text-white">
            <Dropdown title="About the Journal" items={aboutItems} />
            <Dropdown title="Publish" items={publishItems} />
            <Dropdown title="Articles & Issues" items={articlesItems} />

            <Link
              href="/publish/submit-article"
              onClick={() => setMenuOpen(false)}
            >
              Submit Article
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-blue-600"
      >
        {title} <FiChevronDown />
      </button>

      {open && (
        <div className="absolute mt-2 bg-white shadow-md rounded border w-48 z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block px-4 py-2 hover:bg-blue-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

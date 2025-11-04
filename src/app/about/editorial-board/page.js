"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function EditorialBoard() {
  const [editors, setEditors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEditors = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/getalluser`);
        const data = res.data?.data || [];
        console.log(data);
        
        // Only show users with role "editor"
        

        setEditors(data);
      } catch (err) {
        console.error("Error fetching editors:", err);
        setError("Failed to load editorial board. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEditors();
  }, []);

  // Separate editors by their subRole
  const editorInChief = editors.find(
    (e) => e.subRole && e.subRole.toLowerCase().includes("chief")
  );
  const associateEditors = editors.filter(
    (e) =>
      e.subRole &&
      e.subRole.toLowerCase().includes("associate") &&
      !e.subRole.toLowerCase().includes("chief")
  );
  const boardMembers = editors.filter(
    (e) =>
      !e.subRole ||
      (!e.subRole.toLowerCase().includes("chief") &&
        !e.subRole.toLowerCase().includes("associate"))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Editorial Board
        </h1>

        {/* Loading / Error states */}
        {loading && (
          <p className="text-center text-gray-500">Loading editorial board...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* Editor-in-Chief */}
            {editorInChief && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2 text-center">
                  Editor-in-Chief
                </h2>

                <div className="flex justify-center">
                  <div className="p-6 bg-blue-50 rounded-xl shadow-md text-center max-w-md w-full">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">
                      {editorInChief.name}
                    </h3>
                    <p className="italic text-gray-600 mb-1">
                      {editorInChief.subRole}
                    </p>
                    {editorInChief.backGround && (
                      <p className="text-gray-700 text-sm mb-1">
                        {editorInChief.backGround}
                      </p>
                    )}
                    {editorInChief.address && (
                      <p className="text-gray-700 text-sm">
                        {editorInChief.address}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Associate Editors */}
            {associateEditors.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
                  Associate Editors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {associateEditors.map((editor) => (
                    <div
                      key={editor._id}
                      className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {editor.name}
                      </h3>
                      {editor.subRole && (
                        <p className="italic text-gray-600 mb-1">
                          {editor.subRole}
                        </p>
                      )}
                      {editor.backGround && (
                        <p className="text-gray-700 text-sm mb-1">
                          {editor.backGround}
                        </p>
                      )}
                      {editor.address && (
                        <p className="text-gray-700 text-sm">
                          {editor.address}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Editorial Board Members */}
            {boardMembers.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
                  Editorial Board Members
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {boardMembers.map((member) => (
                    <div
                      key={member._id}
                      className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="font-medium text-gray-800">{member.name}</h3>
                      {member.subRole && (
                        <p className="italic text-sm text-gray-600 mt-1">
                          {member.subRole}
                        </p>
                      )}
                      {member.backGround && (
                        <p className="text-gray-700 text-sm mb-1">
                          {member.backGround}
                        </p>
                      )}
                      {member.address && (
                        <p className="text-sm text-gray-600 mt-1">
                          {member.address}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

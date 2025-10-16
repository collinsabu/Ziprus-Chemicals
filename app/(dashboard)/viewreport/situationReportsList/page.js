// src/app/situationReportsList/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SituationReportsList() {
  const router = useRouter();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // Fetch situation report entries
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `/api/situationReports?month=${month + 1}&year=${year}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch situation reports");
        }

        const data = await res.json();
        setEntries(data.entries || []);
      } catch (err) {
        console.error("Error fetching situation reports:", err);
        setError("Failed to load situation reports. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [month, year]);

  // Month navigation
  const handlePrevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((prev) => prev + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two">
        <p className="text-lg text-gray-200 animate-pulse">
          Loading situation reports...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-base_two text-center px-4">
        <p className="text-lg text-red-400 mb-4">{error}</p>
        <button
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-base_text text-white rounded-lg hover:bg-lime-950 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="bg-base_two min-h-screen mb-10 pt-40">
      <div className="max-w-4xl mx-auto p-8 bg-base_color shadow-md my-10 pt-52 rounded-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-white">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">Situation Report List</h1>
          <h2 className="text-xl font-semibold">
            {`${monthNames[month]} ${year}`}
          </h2>
        </div>

        {/* Month Navigation */}
        <div className="flex justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white transition"
          >
            Previous Month
          </button>
          <button
            onClick={handleNextMonth}
            className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white transition"
          >
            Next Month
          </button>
        </div>

        {/* Entries List */}
        {entries.length === 0 ? (
          <div className="text-center py-10 text-gray-300">
            <p>No situation reports found for this month.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li key={entry._id}>
                <Link
                  href={`/viewreport/situationReportsList/${entry._id}`}
                  className="block p-4 bg-white hover:bg-base_text hover:text-white rounded-lg transition"
                >
                  <p className="font-semibold">Date: {entry.date}</p>
                  <p>Challenge: {entry.challenge}</p>
                  <p>Employee Name: {entry.employeeName}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

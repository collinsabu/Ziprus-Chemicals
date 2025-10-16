// src/app/bagAccountEntriesList/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BagAccountEntriesList = () => {
  const router = useRouter();
  const [entries, setEntries] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/bagAccountEntries?month=${month + 1}&year=${year}`);
        if (!res.ok) {
          throw new Error("Failed to fetch entries");
        }
        const data = await res.json();
        setEntries(data.entries || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [month, year]);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(prev => prev - 1);
    } else {
      setMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(prev => prev + 1);
    } else {
      setMonth(prev => prev + 1);
    }
  };

  return (
    <main className="bg-base_two min-h-screen pt-40">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10 rounded-lg">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold text-white">Empty Bag Stock List</h1>
          <h2 className="text-2xl font-bold text-white">{`${monthNames[month]} ${year}`}</h2>
        </div>

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

        {loading && (
          <p className="text-white text-center py-4">Loading entries...</p>
        )}

        {error && (
          <p className="text-red-400 text-center py-4">{error}</p>
        )}

        {!loading && entries.length === 0 && !error && (
          <p className="text-gray-300 text-center py-4">
            No entries found for {monthNames[month]} {year}.
          </p>
        )}

        {!loading && entries.length > 0 && (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li key={entry._id}>
                <Link
                  href={`/viewreport/bagAccountEntriesList/${entry._id}`}
                  className="block p-4 bg-white hover:bg-base_text hover:text-white rounded-lg transition"
                >
                  <p><strong>Date:</strong> {entry.date}</p>
                  <p><strong>Time:</strong> {entry.time}</p>
                  <p><strong>Purchase:</strong> {entry.purchase}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default BagAccountEntriesList;

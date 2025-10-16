// src/app/viewreport/wagesAccountList/[id]/page.js

"use client";

import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Fetch Wages Account Entry
async function getWagesAccount(id) {
  try {
    const res = await fetch(`/api/wagesAccounts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // Ensures fresh data on every visit
    });

    if (!res.ok) throw new Error("Failed to fetch wages account details");

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching wages account:", error);
    return null;
  }
}

export default function WagesAccountDetails({ params }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchWagesAccount = async () => {
      setLoading(true);
      setError(null);
      const fetchedEntry = await getWagesAccount(params.id);

      if (fetchedEntry) {
        setEntry(fetchedEntry);
      } else {
        setError("Wages account record not found");
      }
      setLoading(false);
    };

    fetchWagesAccount();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_color">
        <p className="text-lg text-gray-300 animate-pulse">
          Loading wages account details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-base_color text-center px-4">
        <p className="text-lg text-red-400 mb-4">{error}</p>
        <button
          onClick={() => router.push("/viewreport/wagesAccountList")}
          className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-green-600 transition"
        >
          <FaArrowLeft />
          Go Back
        </button>
      </div>
    );
  }

  if (!entry) {
    return notFound();
  }

  const fields = [
    { label: "Time", value: entry.time },
    { label: "Worker ID", value: entry.workerId },
    { label: "Bags", value: entry.bags },
    { label: "Material Type", value: entry.materialType },
    { label: "Paid", value: entry.paid },
  ];

  return (
    <main className="min-h-screen bg-base_color py-10 pt-52">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Wages Account Details</h1>
          <p className="text-sm sm:text-md mt-2">Date: {entry.date}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-6">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex justify-between items-center border-b pb-4"
            >
              <h5 className="text-lg font-medium">{field.label}</h5>
              <p className="text-lg text-gray-700 break-words">{field.value}</p>
            </div>
          ))}

          {/* Comment Section */}
          <div className="space-y-2">
            <h5 className="text-lg font-medium">Comment</h5>
            <p className="text-gray-600 break-words">
              {entry.comment || "No comments provided"}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport/wagesAccountList")}
            className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-green-600 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

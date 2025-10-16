"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

async function getProductionRecord(id) {
  try {
    const res = await fetch(`/api/productionRecords/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch production record details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching production record:", error);
    return null;
  }
}

export default function ProductionRecordDetails({ params }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProductionRecord() {
      const fetchedEntry = await getProductionRecord(params.id);
      if (fetchedEntry) {
        setEntry(fetchedEntry);
      } else {
        setError("Production record not found");
      }
      setLoading(false);
    }

    fetchProductionRecord();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-500 animate-pulse">Loading details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  if (!entry) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10 pt-52">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Production Record Details</h1>
          <p className="text-sm sm:text-md mt-2">Date: {entry.date}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-5">
          {[
            { label: "Time", value: entry.time },
            { label: "Worker ID", value: entry.workerId },
            { label: "Material Type", value: entry.materialType },
            { label: "Total Produce", value: entry.totalProduce },
            { label: "Total Production Amount", value: entry.totalProductionAmount },
          ].map((field) => (
            <div
              key={field.label}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-200 pb-3"
            >
              <h5 className="text-base font-medium text-gray-800 w-full sm:w-1/3">
                {field.label}:
              </h5>
              <p className="text-base text-gray-700 break-words whitespace-pre-wrap w-full sm:w-2/3">
                {field.value || "N/A"}
              </p>
            </div>
          ))}

          {/* Comment Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pt-2">
            <h5 className="text-base font-medium text-gray-800 w-full sm:w-1/3">
              Comment:
            </h5>
            <p className="text-base text-gray-700 break-words whitespace-pre-wrap w-full sm:w-2/3">
              {entry.comment || "No comments provided"}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport/productionRecordList")}
            className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

// ✅ Reusable fetch function with error handling
async function getCrudeEntry(id) {
  try {
    const res = await fetch(`/api/crudeEntries/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch crude entry details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching crude entry:", error);
    return null;
  }
}

export default function CrudeEntryDetails({ params }) {
  const { id } = params;
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // ✅ Data Fetching
  useEffect(() => {
    const fetchCrudeEntry = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchedEntry = await getCrudeEntry(id);
        if (fetchedEntry) {
          setEntry(fetchedEntry);
        } else {
          setError("Crude entry not found");
        }
      } catch (err) {
        setError("An unexpected error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchCrudeEntry();
  }, [id]);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two">
        <p className="text-lg text-gray-200 animate-pulse">Loading details...</p>
      </div>
    );
  }

  // ✅ Error UI
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

  // ✅ Not Found
  if (!entry) {
    return notFound();
  }

  // ✅ Page Content
  return (
    <main className="min-h-screen bg-base_color py-10 mb-10 pt-52">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Crude Entry Details</h1>
          <p className="mt-2 text-sm sm:text-md">ID: {entry._id}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Date", value: entry.date },
            { label: "Time", value: entry.time },
            { label: "Material Kind", value: entry.materialKind },
            { label: "Material Type", value: entry.materialType },
            { label: "Vehicle Number", value: entry.vehicleNumber },
            { label: "Driver Name", value: entry.driverName },
            { label: "Driver Number", value: entry.driverNumber },
            { label: "Tonnage", value: entry.tonnage },
          ].map((field) => (
            <div
              key={field.label}
              className="flex justify-between items-center border-b pb-3"
            >
              <h5 className="text-lg font-medium">{field.label}</h5>
              <p className="text-lg text-gray-700 break-words">
                {field.value || "N/A"}
              </p>
            </div>
          ))}

          {/* Comment Section */}
          <div className="mt-4 space-y-2">
            <h5 className="text-lg font-medium">Comment</h5>
            <p className="text-gray-600 break-words">
              {entry.comment || "No comments provided"}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport")}
            className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-indigo-600 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

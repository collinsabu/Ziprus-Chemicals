"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function getCrudeEntry(id) {
  try {
    const res = await fetch(`/api/crudeEntries/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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

  useEffect(() => {
    async function fetchCrudeEntry() {
      try {
        const fetchedEntry = await getCrudeEntry(id);
        if (fetchedEntry) {
          setEntry(fetchedEntry);
        } else {
          setError("Crude entry not found");
        }
      } catch (error) {
        setError("An unexpected error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    }

    fetchCrudeEntry();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
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
    <main className="min-h-screen bg-base_color mb-10 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl font-bold">Crude Entry Details</h1>
        </div>

        {/* Entry Details Section */}
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
            <div key={field.label} className="flex justify-between">
              <h5 className="text-lg font-medium">{field.label}:</h5>
              <p className="text-lg text-gray-700 break-words">
                {field.value || "N/A"}
              </p>
            </div>
          ))}
          <div className="mt-4">
            <h5 className="text-lg font-medium">Comment:</h5>
            <p className="text-lg text-gray-700 break-words">
              {entry.comment || "No comments available"}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport")}
            className="px-4 py-2 bg-base_two text-white rounded-lg hover:bg-indigo-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

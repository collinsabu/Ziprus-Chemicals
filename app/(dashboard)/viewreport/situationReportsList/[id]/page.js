"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function getSituationReport(id) {
  try {
    const res = await fetch(`/api/situationReports/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch situation report details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching situation report:", error);
    return null;
  }
}

export default function SituationReportDetails({ params }) {
  const { id } = params;
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSituationReport = async () => {
      try {
        const fetchedEntry = await getSituationReport(id);
        if (fetchedEntry) {
          setEntry(fetchedEntry);
        } else {
          setError("Situation report not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSituationReport();
  }, [id]);

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
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-500">Not Found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base_color mb-10 py-10">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl font-bold">Situation Report Details</h1>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Date", value: entry.date },
            { label: "Time", value: entry.time },
            { label: "Employee Name", value: entry.employeeName },
            { label: "Challenges", value: entry.challenge },
            { label: "Solution", value: entry.solution },
          ].map((field) => (
            <div key={field.label} className="flex justify-between items-center">
              <h5 className="text-lg font-medium">{field.label}:</h5>
              <p className="text-lg text-gray-700 break-words">{field.value || "N/A"}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport/situationReportsList")}
            className="px-4 py-2 bg-base_two text-white rounded-lg hover:bg-indigo-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

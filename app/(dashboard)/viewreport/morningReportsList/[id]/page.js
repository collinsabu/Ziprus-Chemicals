"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

async function getMorningReport(id) {
  try {
    const res = await fetch(`/api/morningReports/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch morning report details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching morning report:", error);
    return null;
  }
}

export default function MorningReportDetails({ params }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMorningReport = async () => {
      try {
        const fetchedEntry = await getMorningReport(params.id);
        if (fetchedEntry) {
          setEntry(fetchedEntry);
        } else {
          setError("Morning report not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMorningReport();
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
    <main className="min-h-screen bg-base_color py-10 mb-10">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl font-bold">Morning Report Details</h1>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Date", value: entry.date },
            { label: "Time", value: entry.time },
            { label: "Plan Activities", value: entry.planActivities },
            { label: "Summary Note", value: entry.summaryNote },
            { label: "Employee Name", value: entry.employeeName },
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
            onClick={() => router.push("/viewreport/morningReportsList")}
            className="px-4 py-2 bg-base_two text-white rounded-lg hover:bg-green-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

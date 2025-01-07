"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

async function getDailyReport(id) {
  try {
    const res = await fetch(`/api/dailyReports/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch daily report details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching daily report:", error);
    return null;
  }
}

export default function DailyReportDetail({ params }) {
  const { id } = params;
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchDailyReport() {
      try {
        const fetchedReport = await getDailyReport(id);
        if (fetchedReport) {
          setReport(fetchedReport);
        } else {
          setError("Daily report not found");
        }
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchDailyReport();
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

  if (!report) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl font-bold">Daily Report Details</h1>
        </div>

        {/* Report Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Date", value: report.date },
            { label: "Employee Name", value: report.employeeName },
            { label: "Challenges", value: report.challenges },
            { label: "Summary Note", value: report.summaryNote },
          ].map((field) => (
            <div key={field.label} className="flex justify-between items-center">
              <h5 className="text-lg font-medium">{field.label}:</h5>
              <p className="text-lg text-gray-700 break-words">
                {field.value || "N/A"}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport/dailyReportsList")}
            className="px-4 py-2 bg-base_two text-white rounded-lg hover:bg-teal-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const LightMonitoringDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await fetch(`/api/lightMonitoring/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch light monitoring details");
        }

        const data = await res.json();
        setEntry(data.entry);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
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
        <p className="text-lg text-gray-500">No details available for this entry.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl font-bold">Light Monitoring Details</h1>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Date", value: entry.date },
            { label: "Time", value: entry.time },
            { label: "Number of Bags", value: entry.numberOfBags },
            { label: "Light", value: entry.light },
            { label: "Summary Note", value: entry.summaryNote },
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
            onClick={() => router.push("/viewreport/lightMonitoringList")}
            className="flex items-center gap-2 px-4 py-2 bg-base_two text-white rounded-lg hover:bg-blue-600"
          >
            <FaArrowLeft />
            Back to List
          </button>
        </div>
      </div>
    </main>
  );
};

export default LightMonitoringDetails;

// src/app/(dashboard)/viewreport/dailyReportsList/[id]/page.js

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
      const fetchedEntry = await getDailyReport(id);
      if (fetchedEntry) {
        setReport(fetchedEntry);
      } else {
        setError("Daily report not found");
      }
      setLoading(false);
    }

    fetchDailyReport();
  }, [id]);

  if (loading) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        loading details...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!report) {
    return notFound();
  }

  return (
    <main className="bg-base_two my-10">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 text-white bg-base_color px-4 sm:px-8 overflow-hidden">
        {[
          { label: "Date", value: report.date },
          { label: "Employee Name", value: report.employeeName },
          { label: "Challenges", value: report.challenges },
          { label: "Summary Note", value: report.summaryNote },
        ].map((field) => (
          <div key={field.label} className="my-6">
            <h5 className="sm:text-xl">{field.label}:</h5>
            <p className="sm:text-xl break-words">{field.value}</p>
          </div>
        ))}

        <button
          onClick={() => router.push("/viewreport/dailyReportsList")}
          className="mt-6 px-4 py-2 bg-base_text text-white rounded hover:bg-base_two hover:text-white"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

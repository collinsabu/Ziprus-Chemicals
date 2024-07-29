"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getCrudeEntry(id) {
  try {
    const res = await fetch(`https://ziprus-chemicals.vercel.app/api/crudeEntries/${id}`, {
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
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCrudeEntry() {
      const fetchedEntry = await getCrudeEntry(params.id);
      if (fetchedEntry) {
        setEntry(fetchedEntry);
      } else {
        setError("Crude entry not found");
      }
      setLoading(false);
    }

    fetchCrudeEntry();
  }, [params.id]);

  if (loading) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        {error}
      </div>
    );
  }

  if (!entry) {
    return notFound();
  }

  return (
    <main className="bg-base_two my-10">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 text-white bg-base_color px-4 sm:px-8 overflow-hidden">
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
          <div key={field.label} className="my-6">
            <h5 className="sm:text-xl">{field.label}:</h5>
            <p className="sm:text-xl break-words">{field.value}</p>
          </div>
        ))}
        <div className="my-6">
          <h5 className="sm:text-2xl">Comment:</h5>
          <p className="sm:text-xl break-words">{entry.comment}</p>
        </div>
        <button
          onClick={() => router.push("/viewreport")}
          className="mt-6 px-4 py-2 bg-base_text text-white rounded hover:bg-base_two hover:text-white"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

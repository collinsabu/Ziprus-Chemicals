// src/app/despatchRecords/[id]/page.js

"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getDespatchRecord(id) {
  try {
    const res = await fetch(`/api/despatchRecords/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch despatch record details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching despatch record:", error);
    return null;
  }
}

export default function DespatchRecordDetails({ params }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchDespatchRecord() {
      const fetchedEntry = await getDespatchRecord(params.id);
      if (fetchedEntry) {
        setEntry(fetchedEntry);
      } else {
        setError("Despatch record not found");
      }
      setLoading(false);
    }

    fetchDespatchRecord();
  }, [params.id]);

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

  if (!entry) {
    return notFound();
  }

  return (
    <main className="bg-base_two my-10">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 text-white bg-base_color px-4 sm:px-8 overflow-hidden">
        {[
          { label: "Date", value: entry.date },
          { label: "Time", value: entry.time },
          { label: "Material Type", value: entry.materialType },
          { label: "Vehicle Number", value: entry.vehicleNumber },
          { label: "Driver Name", value: entry.driverName },
          { label: "Destination", value: entry.destination },
          { label: "Number Loaded", value: entry.numberLoaded },
          { label: "Balance Bag", value: entry.balanceBag },
        ].map((field) => (
          <div key={field.label} className="my-6">
            <h5 className=" sm:text-xl ">{field.label}:</h5>
            <p className=" sm:text-xl break-words">{field.value}</p>
          </div>
        ))}
        <div className="my-6">
          <h5 className=" sm:text-2xl ">Comment:</h5>
          <p className=" sm:text-xl break-words">{entry.comment}</p>
        </div>

        <button
          onClick={() => router.push("/viewreport/despatchRecordsList")}
          className="mt-6 px-4 py-2 bg-base_text text-white rounded hover:bg-base_two hover:text-white"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

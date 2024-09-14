// src/app/wagesAccounts/[id]/page.js

"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getWagesAccount(id) {
  try {
    const res = await fetch(`/api/wagesAccounts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch wages account details");
    }

    const data = await res.json();
    return data.entry;
  } catch (error) {
    console.error("Error fetching wages account:", error);
    return null;
  }
}

export default function WagesAccountDetails({ params }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchWagesAccount() {
      const fetchedEntry = await getWagesAccount(params.id);
      if (fetchedEntry) {
        setEntry(fetchedEntry);
      } else {
        setError("Wages account record not found");
      }
      setLoading(false);
    }

    fetchWagesAccount();
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
          { label: "worker Id", value: entry.workerId },
          { label: "Bags", value: entry.bags },
          { label: "Material Type", value: entry.materialType },
          { label: "Paid", value: entry.paid },
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
          onClick={() => router.push("/viewreport/wagesAccountList")}
          className="mt-6 px-4 py-2 bg-base_text text-white rounded hover:bg-base_two hover:text-white"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

// src/app/viewreport/lightMonitoringList/[id]/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const LightMonitoringDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      const res = await fetch(`/api/lightMonitoring/${id}`);
      const data = await res.json();
      setEntry(data.entry);
    };

    fetchEntry();
  }, [id]);

  if (!entry) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        loading Details...
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-base_color text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Light Monitoring Details</h2>
      <p>Date: {entry.date}</p>
      <p>Time: {entry.time}</p>
      <p>Number of Bags: {entry.numberOfBags}</p>
      <p>Light: {entry.light}</p>
      <p>Summary Note: {entry.summaryNote}</p>
      <button
        onClick={() => router.push("/viewreport/lightMonitoringList")}
        className="mt-4 bg-base_text text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-950"
      >
        Back to List
      </button>
    </div>
  );
};

export default LightMonitoringDetails;

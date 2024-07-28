// src/app/customerLoadingList/[id]/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CustomerLoadingDetails = ({ params }) => {
  const [entry, setEntry] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchEntry = async () => {
      const res = await fetch(`/api/customerLoading/${id}`);
      const data = await res.json();
      setEntry(data.entry);
    };

    fetchEntry();
  }, [id]);

  if (!entry) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
      loading details...
    </div>
    );
  }

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-white  shadow-md my-10">
        <h2 className="text-2xl  mb-4">Customer Loading Details</h2>
        <p><strong>Date:</strong> {entry.date}</p>
        <p><strong>Time:</strong> {entry.time}</p>
        <p><strong>Vehicle Number:</strong> {entry.vehicleNumber}</p>
        <p><strong>Customer Unique ID:</strong> {entry.customerUniqueID}</p>
        <p><strong>Material Type:</strong> {entry.materialType}</p>
        <p><strong>Tonnage:</strong> {entry.tonnage}</p>
        <p><strong>Price by Tonnage:</strong> {entry.priceByTonnage}</p>
        <p><strong>Location:</strong> {entry.location}</p>
        <p><strong>Summary Note:</strong> {entry.summaryNote}</p>
        <button onClick={() => router.push('/viewloadingandpayment')} className="mt-4 p-2 bg-base_text text-white rounded-lg">Back to List</button>
      </div>
    </main>
  );
};

export default CustomerLoadingDetails;

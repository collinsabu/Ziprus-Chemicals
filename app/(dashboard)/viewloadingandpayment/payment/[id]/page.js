// src/app/customerPaymentList/[id]/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CustomerPaymentDetails = ({ params }) => {
  const [entry, setEntry] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchEntry = async () => {
      const res = await fetch(`/api/customerPayments/${id}`);
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
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-white shadow-md my-10">
        <h2 className="text-2xl font-bold mb-4">Customer Payment Details</h2>
        <p><strong>Date:</strong> {entry.date}</p>
        <p><strong>Time:</strong> {entry.time}</p>
        <p><strong>Customer Unique ID:</strong> {entry.customerUniqueID}</p>
        <p><strong>Payment Amount:</strong> {entry.paymentAmount}</p>
        <p><strong>Summary Note:</strong> {entry.summaryNote}</p>
        <button onClick={() => router.push('/viewloadingandpayment/payment')} className="mt-4 p-2 bg-base_text text-white rounded-lg">Back to List</button>
      </div>
    </main>
  );
};

export default CustomerPaymentDetails;

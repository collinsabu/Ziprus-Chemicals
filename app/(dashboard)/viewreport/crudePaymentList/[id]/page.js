"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

async function getCrudePayment(id) {
  try {
    const res = await fetch(`/api/crudePayment/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch crude payment details");
    }

    const data = await res.json();
    return data.payment;
  } catch (error) {
    console.error("Error fetching crude payment:", error);
    return null;
  }
}

export default function CrudePaymentDetails({ params }) {
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCrudePayment() {
      const fetchedPayment = await getCrudePayment(params.id);
      if (fetchedPayment) {
        setPayment(fetchedPayment);
      } else {
        setError("Crude payment not found");
      }
      setLoading(false);
    }

    fetchCrudePayment();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
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

  if (!payment) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-base_color py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">{payment.materialType} Payment Details</h1>
          <p className="text-sm sm:text-md mt-2">{payment.date}</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Amount Sent</h5>
            <p className="text-lg text-gray-700 font-semibold">${payment.amountSent.toLocaleString()}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Sent To</h5>
            <p className="text-lg text-gray-700">{payment.sentTo}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Tonnage</h5>
            <p className="text-lg text-gray-700">{payment.tonnage} tons</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-medium">Comment</h5>
            <p className="text-gray-600">{payment.comment || "No additional comments"}</p>
          </div>
        </div>

        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/viewreport/crudePaymentList")}
            className="flex items-center gap-2 px-4 py-2 bg-base_text text-white rounded-lg hover:bg-indigo-600"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

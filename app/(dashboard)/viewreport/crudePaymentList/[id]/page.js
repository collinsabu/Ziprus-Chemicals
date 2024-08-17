// src/app/crudePaymentList/[id]/page.js

"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    return <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-xl sm:text-9xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
      loading details...
    </div>
    );
  }

  if (!payment) {
    return notFound();
  }

  return (
    <main className="bg-base_two my-10">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 text-white bg-base_color px-4 sm:px-8 overflow-hidden">
        {[
          { label: "Date", value: payment.date },
          { label: "Amount", value: payment.amountSent },
          { label: "Paid By", value: payment.sentTo },
          { label: "Tonnage", value: payment.tonnage },
        ].map((field) => (
          <div key={field.label} className="my-6">
            <h5 className=" sm:text-xl ">{field.label}:</h5>
            <p className=" sm:text-xl break-words">{field.value}</p>
          </div>
        ))}
        <div className="my-6">
          <h5 className=" sm:text-2xl ">Comment:</h5>
          <p className=" sm:text-xl break-words">{payment.comment}</p>
        </div>
        <button
          onClick={() => router.push("/viewreport/crudePaymentList")}
          className="mt-6 px-4 py-2 bg-base_text text-white rounded hover:bg-base_two hover:text-white"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

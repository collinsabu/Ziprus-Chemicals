// src/app/customerPaymentForm/page.js

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomerPaymentForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customerUniqueID, setCustomerUniqueID] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [summaryNote, setSummaryNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newCustomerPayment = { date, time, customerUniqueID, paymentAmount, summaryNote };

    const res = await fetch("/api/customerPayments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCustomerPayment),
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
    } else {
      router.push("/loadingandpayment/loadingsuccesful");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-base_color text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Customer Payment</h2>

      <div className="mb-4">
        <label className="block  mb-2">Date</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block  mb-2">Time</label>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block  mb-2">Customer Unique ID</label>
        <input
          type="text"
          onChange={(e) => setCustomerUniqueID(e.target.value)}
          value={customerUniqueID}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block  mb-2">Payment Amount</label>
        <input
          type="number"
          onChange={(e) => setPaymentAmount(e.target.value)}
          value={paymentAmount}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block  mb-2">Summary Note</label>
        <textarea
          onChange={(e) => setSummaryNote(e.target.value)}
          value={summaryNote}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-base_text text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-950"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

// src/app/crudePaymentList/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CrudePaymentList() {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  useEffect(() => {
    async function fetchPayments() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/crudePayment?month=${month + 1}&year=${year}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch crude payments");
        }

        const data = await res.json();
        setPayments(data.payments || []);
      } catch (err) {
        console.error("Error fetching payments:", err);
        setError("Unable to load payments. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, [month, year]);

  const handlePrevMonth = () => {
    setError(null);
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setError(null);
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <main className="min-h-screen bg-base_two py-10 pt-40">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md rounded-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-4 sm:mb-0">
            Crude Payments List
          </h1>
          <h2 className="text-xl font-bold text-white">
            {`${monthNames[month]} ${year}`}
          </h2>
        </div>

        {/* Month Navigation */}
        <div className="flex justify-between mb-6 gap-4">
          <button
            onClick={handlePrevMonth}
            className="bg-base_text text-white py-2 px-4 rounded-lg hover:bg-lime-950 transition-colors"
          >
            Previous Month
          </button>
          <button
            onClick={handleNextMonth}
            className="bg-base_text text-white py-2 px-4 rounded-lg hover:bg-lime-950 transition-colors"
          >
            Next Month
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg text-white animate-pulse">Loading payments...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg text-red-500">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && payments.length === 0 && (
          <div className="text-center text-white text-lg mt-6">
            No payments found for {monthNames[month]} {year}.
          </div>
        )}

        {/* Payments List */}
        {!loading && !error && payments.length > 0 && (
          <ul className="space-y-3">
            {payments.map((payment) => (
              <li key={payment._id}>
                <Link
                  href={`/viewreport/crudePaymentList/${payment._id}`}
                  className="block p-4 bg-white rounded-lg hover:bg-base_text hover:text-white transition-colors shadow"
                >
                  <p><span className="font-semibold">Date:</span> {payment.date || "N/A"}</p>
                  <p><span className="font-semibold">Amount:</span> {payment.amountSent || "N/A"}</p>
                  <p><span className="font-semibold">Sent To:</span> {payment.sentTo || "N/A"}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

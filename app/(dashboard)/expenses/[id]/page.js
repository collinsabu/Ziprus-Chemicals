"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function ExpenseDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const res = await fetch(`/api/expenses/${id}`);
        if (res.ok) {
          const data = await res.json();
          setExpense(data);
        } else {
          throw new Error("Failed to fetch expense details.");
        }
      } catch (error) {
        console.error(error);
        setError("Expense not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchExpense();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_color">
        <p className="text-lg text-white animate-pulse">Loading...</p>
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

  return (
    <main className="min-h-screen bg-base_color py-10 my-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Expense Details</h1>
          <p className="text-sm sm:text-md mt-2">{expense.date}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Time</h5>
            <p className="text-lg text-gray-700">{expense.time}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Title</h5>
            <p className="text-lg text-gray-700">{expense.title}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Amount</h5>
            <p className="text-lg text-gray-700 font-semibold">
            ₦{parseFloat(expense.amount).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Item Purchased</h5>
            <p className="text-lg text-gray-700">{expense.itemPurchased}</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-medium">Description</h5>
            <p className="text-gray-600">
              {expense.fullDescription || "No additional details"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 bg-base_text text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}

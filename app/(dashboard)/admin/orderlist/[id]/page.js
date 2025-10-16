"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Fetch single order
async function getOrder(id) {
  try {
    const res = await fetch(`/api/order/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to fetch order details");

    return await res.json();
  } catch (error) {
    console.error("Error fetching order:", error);
    return null;
  }
}

export default function OrderDetails({ params }) {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const fetchedOrder = await getOrder(params.id);
      if (fetchedOrder) setOrder(fetchedOrder);
      else setError("Order not found");
      setLoading(false);
    }

    fetchOrder();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two">
        <p className="text-lg text-gray-200 animate-pulse">Loading order details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-base_two text-center px-4">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  if (!order) return notFound();

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10 pt-52">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-6 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Order Details</h1>
          <p className="mt-2 text-sm sm:text-md">Customer: {order.name}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 sm:p-8 space-y-4">
          {[
            { label: "Company Name", value: order.company },
            { label: "Email", value: order.email },
            { label: "Factory Address", value: order.supply },
            { label: "Phone Number", value: order.number },
            { label: "Material", value: order.material },
          ].map((field) => (
            <div
              key={field.label}
              className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b pb-4"
            >
              <h5 className="text-lg font-medium mb-1 sm:mb-0">{field.label}</h5>
              <p className="text-lg text-gray-700 break-words">{field.value || "N/A"}</p>
            </div>
          ))}

          {/* Message */}
          <div className="space-y-2 mt-2">
            <h5 className="text-lg font-medium">Message</h5>
            <p className="text-gray-600 break-words">{order.body || "No additional message"}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/admin/orderlist")}
            className="flex items-center gap-2 px-4 py-2 bg-base_text text-white rounded-lg hover:bg-indigo-600 transition"
          >
            <FaArrowLeft />
            Back to Admin
          </button>
        </div>
      </div>
    </main>
  );
}

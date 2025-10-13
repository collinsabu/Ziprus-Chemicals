"use client";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

async function getOrder(id) {
  try {
    const res = await fetch(`/api/order/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch order details");
    }

    const data = await res.json();
    return data;
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
      if (fetchedOrder) {
        setOrder(fetchedOrder);
      } else {
        setError("Order not found");
      }
      setLoading(false);
    }

    fetchOrder();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-500 animate-pulse">Loading order details...</p>
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

  if (!order) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-base_color py-10 mb-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-base_text to-base_two text-white py-6 px-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Order Details</h1>
          <p className="text-sm sm:text-md mt-2">Customer: {order.name}</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Company Name</h5>
            <p className="text-lg text-gray-700 font-semibold">{order.company}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Email</h5>
            <p className="text-lg text-gray-700">{order.email}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Factory Address</h5>
            <p className="text-lg text-gray-700">{order.supply}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Phone Number</h5>
            <p className="text-lg text-gray-700">{order.number}</p>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <h5 className="text-lg font-medium">Material</h5>
            <p className="text-lg text-gray-700">{order.material}</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-medium">Message</h5>
            <p className="text-gray-600">{order.body || "No additional message"}</p>
          </div>
        </div>

        <div className="flex justify-end bg-gray-100 py-4 px-6">
          <button
            onClick={() => router.push("/admin/orderlist")}
            className="flex items-center gap-2 px-4 py-2 bg-base_text text-white rounded-lg hover:bg-indigo-600"
          >
            <FaArrowLeft />
            Back to Admin
          </button>
        </div>
      </div>
    </main>
  );
}

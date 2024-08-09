"use client";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getOrder(id) {
  try {
    const res = await fetch(`https://ziprus-chemicals.vercel.app/api/order/${id}`, {
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
  const router = useRouter(); // Use the useRouter hook for navigation
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
      <div className="text-xl sm:text-2xl flex justify-center items-center bg-base_color text-base_text h-[400px]">
        Loading Details...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!order) {
    return notFound();
  }

  return (
    <main className="bg-base_color my-10 py-11">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto py-10 text-black bg-base_text px-5 sm:px-10 rounded-md shadow-lg">
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Customer Name:</span> {order.name}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Company Name:</span> {order.company}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Email:</span> {order.email}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Factory Address:</span> {order.supply}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Phone Number:</span> {order.number}
        </h5>
        <h5 className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Material:</span> {order.material}
        </h5>
        <p className="text-lg sm:text-xl my-4 border-b-2 border-b-black pb-1">
          <span className="text-white">Message:</span> {order.body}
        </p>
        <button
          onClick={() => router.push('/admin')}
          className="mt-6 px-4 py-2 bg-base_color text-white rounded hover:bg-base_two"
        >
          Back to Admin
        </button>
      </div>
    </main>
  );
}

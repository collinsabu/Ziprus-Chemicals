"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CrudePayment() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amountSent, setAmountSent] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amountSent <= 0 || tonnage <= 0) {
      toast.error("Amount sent and tonnage must be greater than zero.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    setIsLoading(true);

    const newPayment = {
      date,
      time,
      amountSent,
      sentTo,
      materialType,
      tonnage,
      comment,
    };

    try {
      const res = await fetch("/api/crudePayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPayment),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        toast.error(json.error || "Failed to submit the payment.", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.success("Crude payment recorded successfully!", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => router.push("/report/recordsuccesful"),
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-base_text py-6">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-base_color text-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Crude Payment</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="date" className="block mb-2">Date</label>
            <input
              id="date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-2">Time</label>
            <input
              id="time"
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="amountSent" className="block mb-2">Amount Sent</label>
            <input
              id="amountSent"
              type="number"
              onChange={(e) => setAmountSent(e.target.value)}
              value={amountSent}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="sentTo" className="block mb-2">Sent To</label>
            <input
              id="sentTo"
              type="text"
              onChange={(e) => setSentTo(e.target.value)}
              value={sentTo}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="materialType" className="block mb-2">Material Type</label>
            <select
              id="materialType"
              onChange={(e) => setMaterialType(e.target.value)}
              value={materialType}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            >
              <option value="" disabled>Select Material Type</option>
              <option value="Feed">Feed</option>
              <option value="Glass">Glass</option>
              <option value="Texcoat">Texcoat</option>
              <option value="Sugar">Sugar</option>
              <option value="Dust">Dust</option>
              <option value="White">White</option>
              <option value="Off-white">Off-white</option>
              <option value="Calcite">Calcite</option>
            </select>
          </div>

          <div>
            <label htmlFor="tonnage" className="block mb-2">Tonnage</label>
            <input
              id="tonnage"
              type="number"
              onChange={(e) => setTonnage(e.target.value)}
              value={tonnage}
              required
              className="w-full px-3 py-2 border rounded-lg text-black"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="comment" className="block mb-2">Comment</label>
          <textarea
            id="comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="w-full px-3 py-2 border rounded-lg text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-base_text text-white py-2 px-4 rounded-lg hover:bg-lime-950"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

    const res = await fetch("/api/crudePayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPayment),
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
    } else {
      router.push("/report/recordsuccesful");
    }
    setIsLoading(false);
  };

  return (
   <main className="bg-base_text py-6">
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-base_color text-white shadow-md rounded-lg ">
      <h2 className="text-3xl font-bold mb-6 text-white">Crude Payment</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Time</label>
          <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Amount Sent</label>
          <input
            type="number"
            onChange={(e) => setAmountSent(e.target.value)}
            value={amountSent}
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Sent To</label>
          <input
            type="text"
            onChange={(e) => setSentTo(e.target.value)}
            value={sentTo}
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>

        <div>
          <label className="block mb-2">Material Type</label>
          <select
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
          <label className="block mb-2">Tonnage</label>
          <input
            type="number"
            onChange={(e) => setTonnage(e.target.value)}
            value={tonnage}
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2">Comment</label>
        <textarea
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

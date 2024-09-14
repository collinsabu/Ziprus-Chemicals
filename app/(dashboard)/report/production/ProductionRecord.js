"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductionRecord() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [totalProduce, setTotalProduce] = useState("");
  const [amountPerBag, setAmountPerBag] = useState(""); // New State for Amount per Bag
  const [workerId, setWorkerId] = useState(""); // Changed from customerId to workerId
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const totalProductionAmount = totalProduce * amountPerBag; // Calculate totalProductionAmount

    const newRecord = {
      date,
      time,
      materialType,
      totalProduce,
      amountPerBag,
      totalProductionAmount, // Include totalProductionAmount
      workerId, // Include workerId instead of customerId
      comment,
    };

    const res = await fetch("/api/productionRecords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecord),
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
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-base_color shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Production Record</h2>

      {/* Date Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Date</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Time Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Time</label>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Worker ID Field (Updated) */}
      <div className="mb-4">
        <label className="block text-white mb-2">Worker ID</label>
        <select
          onChange={(e) => setWorkerId(e.target.value)}
          value={workerId}
          required
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="" disabled>Select Worker ID</option>
          <option value="ZGCW01">ZGCW01</option>
          <option value="ZGCW02">ZGCW02</option>
          <option value="ZGCW03">ZGCW03</option>
          <option value="ZGCW04">ZGCW04</option>
          <option value="ZGCW05">ZGCW05</option>
          <option value="ZGCW06">ZGCW06</option>
          <option value="ZGCW07">ZGCW07</option>
          <option value="ZGCW08">ZGCW08</option>
        </select>
      </div>

      {/* Material Type Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Material Type</label>
        <select
          onChange={(e) => setMaterialType(e.target.value)}
          value={materialType}
          required
          className="w-full px-3 py-2 border rounded-lg"
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

      {/* Total Produce Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Total Produce</label>
        <input
          type="number"
          onChange={(e) => setTotalProduce(e.target.value)}
          value={totalProduce}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Amount per Bag Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Amount per Bag</label>
        <input
          type="number"
          onChange={(e) => setAmountPerBag(e.target.value)}
          value={amountPerBag}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Comment Field */}
      <div className="mb-4">
        <label className="block text-white mb-2">Comment</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="w-full px-3 py-2 border rounded-lg"
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

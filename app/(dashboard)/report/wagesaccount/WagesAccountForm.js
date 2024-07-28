"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WagesAccountForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [bags, setBags] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [paid, setPaid] = useState("");
  const [balance, setBalance] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newWagesAccount = { date, time, workerName, bags, materialType, paid, balance, comment };

    const res = await fetch("/api/wagesAccounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWagesAccount),
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-base_color text-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Wages Account</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2">Date</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Time</label>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Worker / Workers Name</label>
        <input
          type="text"
          onChange={(e) => setWorkerName(e.target.value)}
          value={workerName}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Bags</label>
        <input
          type="number"
          onChange={(e) => setBags(e.target.value)}
          value={bags}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Material Type</label>
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

      <div className="mb-4">
        <label className="block font-bold mb-2">Paid</label>
        <input
          type="number"
          onChange={(e) => setPaid(e.target.value)}
          value={paid}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Balance</label>
        <input
          type="number"
          onChange={(e) => setBalance(e.target.value)}
          value={balance}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">Comment</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
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

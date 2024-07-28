"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CrudeForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [materialKind, setMaterialKind] = useState("Feed");
  const [materialType, setMaterialType] = useState("bolder");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverNumber, setDriverNumber] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newEntry = { date, time, materialKind, materialType, vehicleNumber, driverName, driverNumber, tonnage, comment };

    const res = await fetch("/api/crudeEntries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-base_color  shadow-md rounded-lg my-6 ">
      <h2 className="text-2xl font-bold mb-6 text-white">Crude Record</h2>
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

      <div className="mb-4">
        <label className="block text-white  mb-2">Time</label>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Material Kind</label>
        <select
          onChange={(e) => setMaterialKind(e.target.value)}
          value={materialKind}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="Feed">Feed</option>
          <option value="Glass">Glass</option>
          <option value="white">White</option>
          <option value="off-white">Off-white</option>
          <option value="white-calcite">White Calcite</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Material Type</label>
        <select
          onChange={(e) => setMaterialType(e.target.value)}
          value={materialType}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="bolder">Bolder</option>
          <option value="chipings">Chipings</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Vehicle Number</label>
        <input
          type="text"
          onChange={(e) => setVehicleNumber(e.target.value)}
          value={vehicleNumber}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white  mb-2">Driver Name</label>
        <input
          type="text"
          onChange={(e) => setDriverName(e.target.value)}
          value={driverName}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white  mb-2">Driver Number</label>
        <input
          type="text"
          onChange={(e) => setDriverNumber(e.target.value)}
          value={driverNumber}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white  mb-2">Tonnage</label>
        <input
          type="number"
          onChange={(e) => setTonnage(e.target.value)}
          value={tonnage}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white  mb-2">Comment</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="please enter location where material came from and was supplied to in your comment."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-base_text text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-950 hover:border-white"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

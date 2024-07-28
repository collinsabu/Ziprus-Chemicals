// src/app/customerLoadingForm/page.js

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomerLoadingForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [customerUniqueID, setCustomerUniqueID] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [tonnage, setTonnage] = useState("");
  const [priceByTonnage, setPriceByTonnage] = useState("");
  const [location, setLocation] = useState("");
  const [summaryNote, setSummaryNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newCustomerLoading = { date, time, vehicleNumber, customerUniqueID, materialType, tonnage, priceByTonnage, location, summaryNote };

    const res = await fetch("/api/customerLoading", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCustomerLoading),
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
    } else {
      router.push("/loadingandpayment/loadingsuccesful");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-base_color text-white shadow-md rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6">Customer Loading</h2>

      <div className="mb-4">
        <label className="block mb-2">Date</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Time</label>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Vehicle Number</label>
        <input
          type="text"
          onChange={(e) => setVehicleNumber(e.target.value)}
          value={vehicleNumber}
          placeholder="Enter vehicle number"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Customer Unique ID</label>
        <input
          type="text"
          onChange={(e) => setCustomerUniqueID(e.target.value)}
          value={customerUniqueID}
          placeholder="Enter customer unique ID"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Material Type</label>
        <input
          type="text"
          onChange={(e) => setMaterialType(e.target.value)}
          value={materialType}
          placeholder="Enter material type"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Tonnage</label>
        <input
          type="number"
          onChange={(e) => setTonnage(e.target.value)}
          value={tonnage}
          placeholder="Enter tonnage"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Price by Tonnage</label>
        <input
          type="number"
          onChange={(e) => setPriceByTonnage(e.target.value)}
          value={priceByTonnage}
          placeholder="Enter price by tonnage"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Enter location"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Summary Note</label>
        <textarea
          onChange={(e) => setSummaryNote(e.target.value)}
          value={summaryNote}
          placeholder="Enter summary note"
          required
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

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LightMonitoringForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfBags, setNumberOfBags] = useState("");
  const [light, setLight] = useState("Yes");
  const [summaryNote, setSummaryNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newLightMonitoring = { date, time, numberOfBags, light, summaryNote };

    const res = await fetch("/api/lightMonitoring", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLightMonitoring),
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
      <h2 className="text-2xl font-bold mb-6">Light Monitoring</h2>

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
        <select
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        >
          <option value="">Select Time</option>
          <option value="07:00 - 11:00">07:00 - 11:00</option>
          <option value="11:00 - 15:00">11:00 - 15:00</option>
          <option value="15:00 - 19:00">15:00 - 19:00</option>
          <option value="19:00 - 23:00">19:00 - 23:00</option>
          <option value="23:00 - 03:00">23:00 - 03:00</option>
          <option value="03:00 - 07:00">03:00 - 07:00</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Number of Bags</label>
        <input
          type="number"
          onChange={(e) => setNumberOfBags(e.target.value)}
          value={numberOfBags}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Light</label>
        <select
          onChange={(e) => setLight(e.target.value)}
          value={light}
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Summary Note</label>
        <textarea
          onChange={(e) => setSummaryNote(e.target.value)}
          value={summaryNote}
          placeholder="Please state if you have any other challenges that affect you from utilizing the light."
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

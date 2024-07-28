// src/app/morningReportForm/page.js

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MorningReportForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [planActivities, setPlanActivities] = useState("");
  const [summaryNote, setSummaryNote] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newMorningReport = { date, time, planActivities, summaryNote, employeeName };

    const res = await fetch("/api/morningReports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMorningReport),
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
      <h2 className="text-2xl font-bold mb-6">Morning Report</h2>

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
        <label className="block mb-2">Plan Activities</label>
        <textarea
          onChange={(e) => setPlanActivities(e.target.value)}
          value={planActivities}
          placeholder="State all the things you plan to achieve today"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Summary Note</label>
        <textarea
          onChange={(e) => setSummaryNote(e.target.value)}
          value={summaryNote}
          placeholder="State any possible challenge or suggestion to help you achieve all your plans"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Employee Name</label>
        <input
          type="text"
          onChange={(e) => setEmployeeName(e.target.value)}
          value={employeeName}
          placeholder="Enter employee name"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        />
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

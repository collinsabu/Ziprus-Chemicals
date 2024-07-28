// src/app/dailyReportForm/page.js

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DailyReportForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ideas, setIdeas] = useState("");
  const [challenges, setChallenges] = useState("");
  const [summaryNote, setSummaryNote] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newDailyReport = { date, time, ideas, challenges, summaryNote, employeeName };

    const res = await fetch("/api/dailyReports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDailyReport),
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
      <h2 className="text-2xl font-bold mb-6">Daily Report</h2>

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
        <label className="block mb-2">Ideas/Suggestions</label>
        <textarea
          onChange={(e) => setIdeas(e.target.value)}
          value={ideas}
          placeholder="Give possible suggestion to help us achieve set plans"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Challenges</label>
        <textarea
          onChange={(e) => setChallenges(e.target.value)}
          value={challenges}
          placeholder="State any possible challenges you see affecting the organization or stopping you from hitting your organization set target"
          required
          className="w-full px-3 py-2 border rounded-lg text-black"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Summary Note</label>
        <textarea
          onChange={(e) => setSummaryNote(e.target.value)}
          value={summaryNote}
          placeholder="Please give summary of everything that has happened during the day"
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

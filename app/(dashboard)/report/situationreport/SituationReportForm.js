"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SituationReportForm() {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newSituationReport = { date, time, challenge, solution, employeeName };

    try {
      const res = await fetch("/api/situationReports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSituationReport),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        toast.error(json.error || "Failed to submit the report.", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.success("Situation report submitted successfully!", {
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
      console.error("Error submitting form:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-base_color text-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Situation Report</h2>

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
          <label className="block mb-2">Challenge</label>
          <textarea
            onChange={(e) => setChallenge(e.target.value)}
            value={challenge}
            placeholder="Describe the challenge faced"
            required
            className="w-full px-3 py-2 border rounded-lg text-black"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Solution</label>
          <textarea
            onChange={(e) => setSolution(e.target.value)}
            value={solution}
            placeholder="Describe the solution proposed or implemented"
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
    </>
  );
}

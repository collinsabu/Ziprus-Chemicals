"use client";

import { useState } from "react";

export default function NewReportPage() {
  const [form, setForm] = useState({
    staffName: "",
    title: "",
    department: "",
    report: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      staffName: "",
      title: "",
      department: "",
      report: "",
    });

    setLoading(false);

    alert("Report sent successfully");
  }

  return (
    <div className="max-w-2xl mx-auto pt-40 ">
      <h1 className="text-2xl font-bold mb-6">
        Submit Staff Report
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Staff Name"
          className="w-full border p-2 rounded"
          value={form.staffName}
          onChange={(e) =>
            setForm({ ...form, staffName: e.target.value })
          }
          required
        />

        <input
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <input
          placeholder="Department"
          className="w-full border p-2 rounded"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Report details..."
          className="w-full border p-2 rounded h-40"
          value={form.report}
          onChange={(e) =>
            setForm({ ...form, report: e.target.value })
          }
          required
        />

        <button
          disabled={loading}
          className="bg-[#035145] text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Sending..." : "Submit Report"}
        </button>

      </form>
    </div>
  );
}
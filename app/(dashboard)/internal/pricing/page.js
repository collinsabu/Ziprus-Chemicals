"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const states = [
  "All States",
  "Lagos",
  "Ogun",
  "Benin",
  "Asaba",
  "Owerri",
  "Onitsha",
  "Enugu",
  "Aba",
  "Abuja",
  "Kaduna",
  "Jos",
  "Benue",
  "Sokoto",
];

const materials = [
  "Animal feed grade limestone",
  "Glass grade limestone",
  "Pure white dolomite",
  "Off-white dolomite",
  "Superfine",
  "Ultrafine-CU30",
  "Ultrafine-CU25",
  "Kaolin",
  "Pure-White calcite",
  "Grey calcite",
  "Superfine calcite",
];

export default function PricingPage() {
  const [prices, setPrices] = useState([]);
  const [selectedState, setSelectedState] = useState("All States");
  const [showProfit, setShowProfit] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    state: "",
    material: "",
    materialCost: "",
    transportCost: "",
    loadingCost: "",
    profit: "",
  });

  async function fetchPrices() {
    const res = await fetch("/api/prices");
    const data = await res.json();
    setPrices(data);
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      state: "",
      material: "",
      materialCost: "",
      transportCost: "",
      loadingCost: "",
      profit: "",
    });

    fetchPrices();
  }

  async function deletePrice(id) {
    await fetch(`/api/prices/${id}`, { method: "DELETE" });
    fetchPrices();
  }

  async function updatePrice() {
    await fetch(`/api/prices/${editing._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing),
    });

    setEditing(null);
    fetchPrices();
  }

  // ✅ FILTER LOGIC
  const filteredPrices =
    selectedState === "All States"
      ? prices
      : prices.filter((p) => p.state === selectedState);

  return (
    <main className="py-40 bg-base_text">
      <div className="px-4 md:px-6 max-w-7xl mx-auto py-10 bg-base_color">
        <div className="flex between justify-between">
          {" "}
          <h1 className="text-2xl font-bold mb-6 text-base_text">
            Internal Pricing Dashboard
          </h1>
          <Link href="/admin" className="text-2xl font-bold mb-6 text-base_text cursor-pointer">
            Return to Admin
          </Link>
        </div>

        {/* ================= ADD FORM ================= */}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4 mb-10 bg-base_two p-6 rounded-xl shadow border"
        >
          <select
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="border p-2 rounded"
            required
          >
            <option value="">Select State</option>
            {states.slice(1).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            value={form.material}
            onChange={(e) => setForm({ ...form, material: e.target.value })}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Material</option>
            {materials.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          {[
            { key: "materialCost", label: "Material Cost" },
            { key: "transportCost", label: "Transport Cost" },
            { key: "loadingCost", label: "Loading Cost" },
            { key: "profit", label: "Profit" },
          ].map((field) => (
            <input
              key={field.key}
              type="number"
              placeholder={field.label}
              value={form[field.key]}
              onChange={(e) =>
                setForm({ ...form, [field.key]: e.target.value })
              }
              className="border p-2 rounded"
              required
            />
          ))}

          <button className="bg-base_text text-black py-2 rounded font-semibold hover:opacity-90 transition">
            Add Price
          </button>
        </form>

        {/* ================= STATE FILTER MENU ================= */}

        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap
                  ${
                    selectedState === state
                      ? "bg-base_text text-black"
                      : "bg-base_two text-white hover:opacity-80"
                  }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PROFIT TOGGLE ================= */}

        <div className="flex justify-between mb-6">
          <button
            onClick={() => setShowProfit(!showProfit)}
            className="bg-base_text px-4 py-2 rounded font-medium"
          >
            {showProfit ? "Hide Profit" : "Show Profit"}
          </button>
        </div>

        {/* ================= EMPTY STATE ================= */}

        {filteredPrices.length === 0 && (
          <div className="text-center py-10 text-white opacity-80">
            No pricing found for {selectedState}
          </div>
        )}

        {/* ================= DESKTOP TABLE ================= */}

        {filteredPrices.length > 0 && (
          <div className="hidden md:block overflow-x-auto rounded-xl shadow border">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-base_two sticky top-0 text-white">
                <tr>
                  <th className="w-[15%] px-4 py-3 text-left">State</th>
                  <th className="w-[30%] px-4 py-3 text-left">Material</th>

                  {showProfit && (
                    <th className="w-[15%] px-4 py-3 text-right">Profit</th>
                  )}

                  <th className="w-[20%] px-4 py-3 text-right">Price / Ton</th>

                  <th className="w-[20%] px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredPrices.map((p) => (
                  <tr
                    key={p._id}
                    className="border-t text-white hover:bg-black"
                  >
                    <td className="px-4 py-3">{p.state}</td>

                    <td className="px-4 py-3 truncate">{p.material}</td>

                    {showProfit && (
                      <td className="px-4 py-3 text-right">
                        ₦{p.profit.toLocaleString()}
                      </td>
                    )}

                    <td className="px-4 py-3 font-semibold text-right">
                      ₦{p.pricePerTon.toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setEditing(p)}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deletePrice(p._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ================= MOBILE CARDS ================= */}

        <div className="md:hidden space-y-4">
          {filteredPrices.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow border p-4 space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">State</span>
                <span className="font-medium">{p.state}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Material</span>
                <span className="font-medium text-right">{p.material}</span>
              </div>

              {showProfit && (
                <div className="flex justify-between font-medium">
                  <span>Profit</span>
                  <span>₦{p.profit.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between font-semibold">
                <span>Price / Ton</span>
                <span>₦{p.pricePerTon.toLocaleString()}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setEditing(p)}
                  className="flex-1 bg-base_color font-medium text-white py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePrice(p._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EDIT MODAL ================= */}

        {editing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-3">
              <h2 className="text-lg font-bold">Edit Price</h2>

              {["materialCost", "transportCost", "loadingCost", "profit"].map(
                (f) => (
                  <input
                    key={f}
                    type="number"
                    value={editing[f]}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        [f]: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded"
                  />
                ),
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditing(null)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={updatePrice}
                  className="bg-[#035145] text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

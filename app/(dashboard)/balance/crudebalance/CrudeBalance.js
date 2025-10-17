"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CrudeBalance = () => {
  const [crudeTotal, setCrudeTotal] = useState(0);
  const [totalCustomerLoading, setTotalCustomerLoading] = useState(0);
  const [crudeBalance, setCrudeBalance] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch total crude purchased
  const fetchCrudeTotal = async () => {
    try {
      const res = await fetch("/api/crudeTotal", { cache: "no-store" });
      const data = await res.json();
      return data.total || 0;
    } catch (error) {
      console.error("Error fetching crude total:", error);
      return 0;
    }
  };

  // Fetch total dispatched to customers
  const fetchTotalCustomerLoading = async () => {
    try {
      const res = await fetch("/api/totalCustomerLoading", { cache: "no-store" });
      const data = await res.json();
      return data.total || 0;
    } catch (error) {
      console.error("Error fetching total customer loading:", error);
      return 0;
    }
  };

  // Fetch both totals and update state together to prevent flicker
  const fetchAllData = async () => {
    const [totalCrude, totalDispatch] = await Promise.all([fetchCrudeTotal(), fetchTotalCustomerLoading()]);
    setCrudeTotal(totalCrude);
    setTotalCustomerLoading(totalDispatch);
    setCrudeBalance(totalCrude - totalDispatch);
    setLastUpdated(new Date().toLocaleString());
  };

  // Initial fetch + auto-refresh every 5 seconds
  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-base_text min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-4 md:p-8 bg-base_color text-white font-semibold shadow-md my-10 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Crude Stock Balance
        </h2>

        {/* Tiny responsive explanatory text */}
        <p className="text-center text-sm md:text-base text-gray-300 mb-6">
          Account of crude/Stone that should be left on ground after Despatch
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 transition-all">
          <p className="bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl text-center rounded">
            Purchase:
            <br />
            <span className="font-bold text-yellow-400">{crudeTotal.toLocaleString()} tons</span>
          </p>
          <p className="bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl text-center rounded">
            Despatched:
            <br />
            <span className="font-bold text-red-400">{totalCustomerLoading.toLocaleString()} tons</span>
          </p>
        </div>

        <h1
          className={`text-3xl md:text-5xl text-center py-10 md:py-20 mt-5 rounded bg-base_two ${
            crudeBalance < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          Balance: {crudeBalance.toLocaleString()} tons
        </h1>

        {lastUpdated && (
          <p className="text-center mt-4 text-sm text-gray-300 italic">
            Last updated: {lastUpdated}
          </p>
        )}

        <div className="flex justify-center mt-10">
          <Link href="/admin">
            <button className="bg-base_text hover:bg-base_two hover:text-white text-base_color py-2 px-4 rounded focus:outline-none focus:shadow-outline transition">
              Go Back to Admin
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CrudeBalance;

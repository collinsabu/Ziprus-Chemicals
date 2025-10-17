"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const StockBalance = () => {
  const [totalProduced, setTotalProduced] = useState(0);
  const [totalDespatch, setTotalDespatch] = useState(0);
  const [stockBalance, setStockBalance] = useState(0);

  const fetchTotalProduced = async () => {
    try {
      const res = await fetch("/api/totalProduced", { cache: "no-store" });
      const data = await res.json();
      setTotalProduced(data.total);
    } catch (error) {
      console.error("Error fetching total produced:", error);
    }
  };

  const fetchTotalDespatch = async () => {
    try {
      const res = await fetch("/api/totalDespatch", { cache: "no-store" });
      const data = await res.json();
      setTotalDespatch(data.total);
    } catch (error) {
      console.error("Error fetching total despatch:", error);
    }
  };

  // Run initially + auto-refresh every 5s
  useEffect(() => {
    fetchTotalProduced();
    fetchTotalDespatch();

    const interval = setInterval(() => {
      fetchTotalProduced();
      fetchTotalDespatch();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update balance whenever totals change
  useEffect(() => {
    setStockBalance(totalProduced - totalDespatch);
  }, [totalProduced, totalDespatch]);

  return (
    <main className="bg-base_text min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base_color text-white font-semibold shadow-md my-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Total Stock Balance Calculation
        </h2>

        {/* Tiny explanatory text */}
        <p className="text-center text-sm md:text-base text-gray-300 mt-2 mb-10">
          Total material left in the factory
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
            Total Production: {totalProduced} bags
          </p>
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
            Total Despatch: {totalDespatch} bags
          </p>
        </div>

        <h1 className="text-green-500 text-3xl md:text-5xl text-center bg-base_two py-10 md:py-20 mt-5">
          Balance: {stockBalance} bags
        </h1>

        <div className="flex justify-center mt-10">
          <Link href="/admin">
            <button className="bg-base_text hover:bg-base_two hover:text-white text-base_color py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back to Admin
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default StockBalance;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CrudePaymentBalance = () => {
  const [crudeTotal, setCrudeTotal] = useState(0);
  const [totalCrudePayment, setTotalCrudePayment] = useState(0);
  const [balance, setBalance] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const fetchCrudeTotal = async () => {
    try {
      const res = await fetch("/api/crudeTotal", { cache: "no-store" });
      const data = await res.json();
      setCrudeTotal(data.total || 0);
    } catch (error) {
      console.error("Error fetching crude total:", error);
    }
  };

  const fetchTotalCrudePayment = async () => {
    try {
      const res = await fetch("/api/totalCrudePayment", { cache: "no-store" });
      const data = await res.json();
      setTotalCrudePayment(data.total || 0);
    } catch (error) {
      console.error("Error fetching total crude payment:", error);
    }
  };

  const fetchAllData = async () => {
    try {
      await Promise.all([fetchCrudeTotal(), fetchTotalCrudePayment()]);
      setLastUpdated(new Date().toLocaleString());
      if (initialLoading) setInitialLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBalance(totalCrudePayment - crudeTotal);
  }, [totalCrudePayment, crudeTotal]);

  return (
    <main className="bg-base_text min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-4 md:p-8 bg-base_color text-white font-semibold shadow-md my-10 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Crude Payment Balance
        </h2>

        {/* Tiny responsive explanatory text */}
        <p className="text-center text-sm md:text-base text-gray-300 mb-6">
          Account of Crude/stone I buy from miners
        </p>

        {initialLoading ? (
          <p className="text-center text-lg">⏳ Loading data...</p>
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 transition-all">
              <p className="bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl text-center rounded">
                Total Paid For:
                <br />
                <span className="font-bold text-green-400">
                  {totalCrudePayment.toLocaleString()} tons
                </span>
              </p>
              <p className="bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl text-center rounded">
                Total Crude Received:
                <br />
                <span className="font-bold text-yellow-400">
                  {crudeTotal.toLocaleString()} tons
                </span>
              </p>
            </div>

            <h1
              className={`text-3xl md:text-5xl text-center py-10 md:py-20 mt-5 rounded ${
                balance < 0 ? "text-red-500" : "text-green-500"
              } bg-base_two transition-all`}
            >
              Balance: {balance.toLocaleString()} tons
            </h1>

            {lastUpdated && (
              <p className="text-center mt-4 text-sm text-gray-300 italic">
                Last updated: {lastUpdated}
              </p>
            )}
          </>
        )}

        <div className="flex justify-center mt-10">
          <Link href="/balance">
            <button className="bg-base_text hover:bg-base_two hover:text-white text-base_color py-2 px-4 rounded focus:outline-none focus:shadow-outline transition">
              Go Back to Admin
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CrudePaymentBalance;

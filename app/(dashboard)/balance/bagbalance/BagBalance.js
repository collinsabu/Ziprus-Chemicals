"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BagBalance = () => {
  const [totalPurchases, setTotalPurchases] = useState(0);
  const [totalProduced, setTotalProduced] = useState(0);
  const [bagBalance, setBagBalance] = useState(0);

  const fetchTotalPurchases = async () => {
    try {
      const res = await fetch("/api/totalPurchases");
      const data = await res.json();
      setTotalPurchases(data.total);
    } catch (error) {
      console.error("Error fetching total purchases:", error);
    }
  };

  const fetchTotalProduced = async () => {
    try {
      const res = await fetch("/api/totalProduced");
      const data = await res.json();
      setTotalProduced(data.total);
    } catch (error) {
      console.error("Error fetching total produced:", error);
    }
  };

  useEffect(() => {
    fetchTotalPurchases();
    fetchTotalProduced();
  }, []);

  useEffect(() => {
    setBagBalance(totalPurchases - totalProduced);
  }, [totalPurchases, totalProduced]);

  return (
    <main className="bg-base_text min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base_color text-white font-semibold shadow-md my-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Bag Balance</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
             Purchases: {totalPurchases} bags
          </p>
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
             Produced: {totalProduced} bags
          </p>
        </div>
        <h1 className="text-green-500 text-3xl md:text-5xl text-center bg-base_two py-10 md:py-20 mt-5">
          Balance: {bagBalance} bags
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

export default BagBalance;

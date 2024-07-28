"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SalaryBalance = () => {
  const [totalProduced, setTotalProduced] = useState(0);
  const [totalBagsInWages, setTotalBagsInWages] = useState(0);
  const [salaryBalance, setSalaryBalance] = useState(0);

  const fetchTotalProduced = async () => {
    try {
      const res = await fetch("/api/totalProduced");
      const data = await res.json();
      setTotalProduced(data.total);
    } catch (error) {
      console.error("Error fetching total produced:", error);
    }
  };

  const fetchTotalBagsInWages = async () => {
    try {
      const res = await fetch("/api/totalBagsInWages");
      const data = await res.json();
      setTotalBagsInWages(data.total);
    } catch (error) {
      console.error("Error fetching total bags in wages:", error);
    }
  };

  useEffect(() => {
    fetchTotalProduced();
    fetchTotalBagsInWages();
  }, []);

  useEffect(() => {
    setSalaryBalance(totalProduced - totalBagsInWages);
  }, [totalProduced, totalBagsInWages]);

  return (
    <main className="bg-base_text min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base_color text-white font-semibold shadow-md my-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Salary Balance</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
            Total Produced: {totalProduced} bags
          </p>
          <p className="mb-2 bg-base_two py-6 md:py-10 px-4 md:px-10 text-xl md:text-2xl font-regular text-center">
            Total Bags in Wages: {totalBagsInWages}
          </p>
        </div>
        <h1 className="text-green-500 text-3xl md:text-5xl text-center bg-base_two py-10 md:py-20 mt-5">
          Balance: {salaryBalance} 
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

export default SalaryBalance;

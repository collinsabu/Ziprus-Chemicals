"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const WorkerWages = () => {
  const [totalProductionAmount, setTotalProductionAmount] = useState(0);
  const [totalPaidWages, setTotalPaidWages] = useState(0);
  const [workerWageBalance, setWorkerWageBalance] = useState(0);
  const searchParams = useSearchParams();
  const workerId = searchParams.get("workerId");

  useEffect(() => {
    if (workerId) {
      const fetchProductionTotal = async () => {
        const res = await fetch(`/api/workerProductionTotal?workerId=${workerId}`);
        const data = await res.json();
        setTotalProductionAmount(data.total || 0);
      };

      const fetchPaidWagesTotal = async () => {
        const res = await fetch(`/api/workerPaidWagesTotal?workerId=${workerId}`);
        const data = await res.json();
        setTotalPaidWages(data.total || 0);
      };

      fetchProductionTotal();
      fetchPaidWagesTotal();
    }
  }, [workerId]);

  useEffect(() => {
    setWorkerWageBalance(totalPaidWages - totalProductionAmount);
  }, [totalPaidWages, totalProductionAmount]);

  return (
    <div className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-black font-semibold shadow-md my-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Worker Wages</h2>
        <div className="block sm:flex justify-around sm:gap-5 my-20">
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">Worker ID: {workerId}</p>
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">Total Production Amount: ₦{totalProductionAmount.toFixed(2)}</p>
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">Total Paid Wages: ₦{totalPaidWages.toFixed(2)}</p>
        </div>

        <h1 className="text-3xl font-bold text-center bg-base_text py-10" style={{ color: workerWageBalance < 0 ? 'red' : 'black' }}>
          Worker Wage Balance: ₦{workerWageBalance.toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default WorkerWages;

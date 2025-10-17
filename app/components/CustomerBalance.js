"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const CustomerBalance = () => {
  const [totalLoading, setTotalLoading] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const searchParams = useSearchParams();
  const customerUniqueID = searchParams.get("customerUniqueID");

  // Function to fetch loading total
  const fetchLoadingTotal = async (id) => {
    try {
      const res = await fetch(`/api/customerLoadingTotal?customerUniqueID=${id}`);
      const data = await res.json();
      setTotalLoading(data.total || 0);
    } catch (error) {
      console.error("Error fetching loading total:", error);
    }
  };

  // Function to fetch payment total
  const fetchPaymentTotal = async (id) => {
    try {
      const res = await fetch(`/api/customerPaymentTotal?customerUniqueID=${id}`);
      const data = await res.json();
      setTotalPayment(data.total || 0);
    } catch (error) {
      console.error("Error fetching payment total:", error);
    }
  };

  // Fetch data when ID is available
  useEffect(() => {
    if (customerUniqueID) {
      fetchLoadingTotal(customerUniqueID);
      fetchPaymentTotal(customerUniqueID);

      // Auto update every 5 seconds
      const interval = setInterval(() => {
        fetchLoadingTotal(customerUniqueID);
        fetchPaymentTotal(customerUniqueID);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [customerUniqueID]);

  // Update balance when totals change
  useEffect(() => {
    setCurrentBalance(totalPayment - totalLoading);
  }, [totalLoading, totalPayment]);

  return (
    <div className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-black font-semibold shadow-md my-10">
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          Customer Payment Balance
        </h2>

        {/* Tiny responsive explanatory text */}
        <p className="text-center text-sm md:text-base text-gray-300 mb-6">
          Customer loading / Payment Account
        </p>

        <div className="block sm:flex justify-around sm:gap-5 my-20">
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">
            Customer Unique ID: {customerUniqueID}
          </p>
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">
            Total Loading: ₦{totalLoading.toFixed(2)}
          </p>
          <p className="py-20 px-10 bg-base_text text-center text-xl my-5">
            Total Payment: ₦{totalPayment.toFixed(2)}
          </p>
        </div>

        <h1
          className="text-3xl font-bold text-center bg-base_text py-10"
          style={{ color: currentBalance < 0 ? "red" : "black" }}
        >
          Current Balance: ₦{currentBalance.toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default CustomerBalance;

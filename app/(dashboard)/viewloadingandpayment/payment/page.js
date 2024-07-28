// src/app/customerPaymentList/page.js

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CustomerPaymentList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch("/api/customerPayments");
      const data = await res.json();
      setEntries(data.entries);
    };

    fetchEntries();
  }, []);

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Customer Payment List</h2>
        <ul>
          {entries.map((entry) => (
            <li key={entry._id} className="mb-2">
              <Link href={`/viewloadingandpayment/payment/${entry._id}`} className="block p-4 bg-white hover:bg-base_text rounded-lg">
                <p>Customer Unique ID: {entry.customerUniqueID}</p>
                <p>Date: {entry.date}</p>
                <p>Payment Amount: {entry.paymentAmount}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CustomerPaymentList;

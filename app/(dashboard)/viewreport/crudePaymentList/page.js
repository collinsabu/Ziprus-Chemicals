// src/app/crudePaymentList/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CrudePaymentList = () => {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await fetch(`/api/crudePayment?month=${month + 1}&year=${year}`);
      if (res.ok) {
        const data = await res.json();
        setPayments(data.payments);
      } else {
        console.error("Failed to fetch crude payments");
      }
    };

    fetchPayments();
  }, [month, year]);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10">
        <div className="flex justify-around mb-5">
          <h1 className="text-2xl font-bold text-white mb-4">Crude Payments</h1>
          <h2 className="text-2xl font-bold mb-4 text-white">{`${monthNames[month]} ${year}`}</h2>
        </div>

        <div className="flex justify-between mb-4">
          <button onClick={handlePrevMonth} className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white">Previous Month</button>
          <button onClick={handleNextMonth} className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white">Next Month</button>
        </div>

        <ul>
          {payments.map((payment) => (
            <li key={payment._id} className="mb-2">
              <Link href={`/viewreport/crudePaymentList/${payment._id}`} className="block p-4 bg-white hover:bg-base_text rounded-lg">
                <p>Date: {payment.date}</p>
                <p>Amount: {payment.amountSent}</p>
                <p>Sent To: {payment.sentTo}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CrudePaymentList;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CrudePaymentList = () => {
  const router = useRouter();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await fetch(`/api/crudePayment`);
      const data = await res.json();
      setPayments(data.payments);
    };

    fetchPayments();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/crudePaymentList/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPayments(payments.filter(payment => payment._id !== id));
      } else {
        console.error("Failed to delete payment");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10">
        <h1 className="text-2xl font-bold text-white mb-4">Crude Payment List</h1>
        <ul>
          {payments.map((payment) => (
            <li key={payment._id} className="mb-2">
              <div className=" p-4 bg-white hover:bg-base_text rounded-lg flex justify-between items-center">
                <Link href={`/viewreport/crudePaymentList${payment._id}`} className="flex-grow">
                  <p>Date: {payment.date}</p>
                  <p>Time: {payment.time}</p>
                  <p>Amount: {payment.amountSent}</p>
                </Link>
                <button
                  onClick={() => handleDelete(payment._id)}
                  className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CrudePaymentList;

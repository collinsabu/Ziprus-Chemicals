"use client";

import { useEffect, useState } from "react";

export default function CrudeBalance() {
  const [crudePurchases, setCrudePurchases] = useState([]);
  const [crudePayments, setCrudePayments] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/crude-balance');
      const data = await res.json();
      
      setCrudePurchases(data.crudePurchases);
      setCrudePayments(data.crudePayments);

      // Calculate balance after fetching data
      const totalCrudePurchase = calculateTotalTonnage(data.crudePurchases);
      const totalCrudePayment = calculateTotalTonnage(data.crudePayments);
      setBalance(totalCrudePurchase - totalCrudePayment);
    }

    fetchData();
  }, []);

  // Function to calculate the total tonnage
  const calculateTotalTonnage = (records) => {
    return records.reduce((total, record) => total + record.tonnage, 0);
  };

  return (
    <main className="bg-base_color text-base_text p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Crude Payment Balance</h2>
      
      <div className="bg-base_text p-4 rounded mb-4">
        <p className="text-white">Total Crude Purchase Tonnage: {calculateTotalTonnage(crudePurchases)} tons</p>
        <p className="text-white">Total Crude Payment Tonnage: {calculateTotalTonnage(crudePayments)} tons</p>
      </div>

      <div className="bg-base_text p-4 rounded">
        <p className="text-white font-bold text-lg">Balance: {balance} tons</p>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LightMonitoringList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch("/api/lightMonitoring");
      const data = await res.json();
      setEntries(data.entries);
    };

    fetchEntries();
  }, []);

  const calculatePercentage = (numberOfBags) => {
    const target = 300;
    const percentage = (numberOfBags / target) * 100;
    return Math.min(percentage, 100).toFixed(2);
  };

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10">
        <h2 className="text-2xl font-bold mb-4">Light Monitoring List</h2>
        <ul>
          {entries.map((entry) => {
            const percentage = calculatePercentage(entry.numberOfBags);
            const percentageColor = percentage < 60 ? 'red' : 'green';
            return (
              <li key={entry._id} className="mb-2">
                <Link href={`/viewreport/lightMonitoringList/${entry._id}`} className="px-6 py-4 bg-white hover:bg-base_text rounded-lg flex items-center justify-between">
                <div>
                <p>Date: {entry.date}</p>
                  <p>Time: {entry.time}</p>
                  <p>Number of Bags: {entry.numberOfBags}</p>
                </div>
                 
                  <div>
                  <span>Light Utilization</span><h1 style={{ color: percentageColor , fontSize: '30px'}}>{percentage}%</h1>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default LightMonitoringList;

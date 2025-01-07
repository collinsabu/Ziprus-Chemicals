"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LightMonitoringList = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState({
    month: new Date().getMonth(), // Start with current month
    year: new Date().getFullYear(), // Start with current year
  });

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch(`/api/lightMonitoring?month=${date.month + 1}&year=${date.year}`);
        if (!res.ok) throw new Error(`Error fetching data: ${res.status}`);
        const data = await res.json();
        setEntries(data.entries || []);
      } catch (error) {
        console.error("Error fetching entries:", error.message);
      }
    };

    fetchEntries();
  }, [date]);

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      let newMonth = prevDate.month - 1;
      let newYear = prevDate.year;
      if (newMonth < 0) {
        newMonth = 11; // Set to December
        newYear -= 1; // Decrease the year by 1
      }
      return { month: newMonth, year: newYear };
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      let newMonth = prevDate.month + 1;
      let newYear = prevDate.year;
      if (newMonth > 11) {
        newMonth = 0; // Set to January
        newYear += 1; // Increase the year by 1
      }
      return { month: newMonth, year: newYear };
    });
  };

  const calculatePercentage = (numberOfBags) => {
    const target = 300;
    const percentage = (numberOfBags / target) * 100;
    return Math.min(percentage, 100).toFixed(2);
  };

  return (
    <main className="bg-base_two">
      <div className="max-w-4xl mx-auto p-8 bg-base_color text-base_color font-semibold shadow-md my-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-white">Light Monitoring List</h2>
          <h2 className="text-xl font-bold text-white">{`${monthNames[date.month]} ${date.year}`}</h2>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white"
          >
            Previous Month
          </button>
          <button
            onClick={handleNextMonth}
            className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white"
          >
            Next Month
          </button>
        </div>
        <ul>
          {entries.length === 0 ? (
            <p className="text-center text-white">No entries found for this month.</p>
          ) : (
            entries.map((entry) => {
              const percentage = calculatePercentage(entry.numberOfBags);
              const percentageColor = percentage < 60 ? "red" : "green";
              return (
                <li key={entry._id} className="mb-2">
                  <Link
                    href={`/viewreport/lightMonitoringList/${entry._id}`}
                    className="px-6 py-4 bg-white hover:bg-base_text rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <p>Date: {entry.date}</p>
                      <p>Time: {entry.time}</p>
                      <p>Number of Bags: {entry.numberOfBags}</p>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm">Light Utilization</span>
                      <h1 style={{ color: percentageColor, fontSize: "30px" }}>{percentage}%</h1>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </main>
  );
};

export default LightMonitoringList;

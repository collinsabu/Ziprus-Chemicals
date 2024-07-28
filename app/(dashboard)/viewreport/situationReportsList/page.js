// src/app/situationReportsList/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SituationReportsList = () => {
  const router = useRouter();
  const [entries, setEntries] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch(`/api/situationReports?month=${month + 1}&year=${year}`);
      const data = await res.json();
      setEntries(data.entries);
    };

    fetchEntries();
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
      <div className=" flex justify-around mb-5">
      <h1 className="text-2xl font-bold text-white mb-4">Situation R. List</h1>
      <h2 className="text-2xl font-bold mb-4 text-white">{`${monthNames[month]} ${year}`}</h2>
      </div>
        <div className="flex justify-between mb-4">
          <button onClick={handlePrevMonth} className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white">Previous Month</button>
          <button onClick={handleNextMonth} className="bg-base_text py-2 px-4 rounded-lg hover:bg-lime-950 hover:text-white">Next Month</button>
        </div>
        <ul>
          {entries.map((entry) => (
            <li key={entry._id} className="mb-2">
              <Link href={`/viewreport/situationReportsList/${entry._id}`} className="block p-4 bg-white hover:bg-base_text rounded-lg">
                <p>Date: {entry.date}</p>
                <p>Challenge: {entry.challenge}</p>
                <p>Employee Name: {entry.employeeName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default SituationReportsList;

"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu

// Worker data with unique IDs
const workers = [
  { name: "Worker 1", id: "ZGCW01" },
  { name: "Worker 2", id: "ZGCW02" },
  { name: "Worker 3", id: "ZGCW03" },
  { name: "Worker 4", id: "ZGCW04" },
  { name: "Worker 5", id: "ZGCW05" },
  { name: "Worker 6", id: "ZGCW06" },
  { name: "Worker 7", id: "ZGCW07" },
  { name: "Worker 8", id: "ZGCW08" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base_color p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Workers Salary Balance</h1>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <ul
        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center bg-base_two md:bg-transparent md:static absolute w-full md:w-auto left-0 md:p-0 p-4`}
      >
        {workers.map((worker) => (
          <li key={worker.id} className="md:ml-4">
            <Link href={`/balance/workerswages?workerId=${worker.id}`}>
              <span
                className="text-white hover:text-base_text block md:inline"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {worker.name}
              </span>
            </Link>
          </li>
        ))}
        <li className="md:ml-4">
          <Link href={"/admin"}>
            <span
              className="text-white hover:text-base_text block md:inline"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Admin Dashboard
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

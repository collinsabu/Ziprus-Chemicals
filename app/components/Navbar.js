"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu

const customers = [
  { name: "Customer 1", id: "zip74dabu" },
  { name: "Customer 2", id: "customer2" },
  { name: "Customer 3", id: "customer3" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base_color p-4">
      <div className="flex justify-between items-center">
       
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
        {customers.map((customer) => (
          <li key={customer.id} className="md:ml-4">
            <Link href={`/balance/customersaccounts?customerUniqueID=${customer.id}`}>
              <span
                className="text-white hover:text-base_text block md:inline"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {customer.name}
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

"use client";

import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function page() {
  return (
    <main className="poppins bg-base_color mt-6 mb-20">
      <div
        className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-center h-[550px] 
          animate__animated animate__fadeIn animate__faster"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-7xl text-base_text mb-6 
          animate__animated animate__bounceIn"
        >
          Thank You
        </h1>
        <p
          className="text-white text-lg sm:text-2xl md:text-3xl text-center 
          animate__animated animate__fadeInUp"
        >
          Your record / report is submitted successfully.
        </p>

        <Link
          href="https://www.zipruschemicals.com/report"
          className="text-white bg-base_color border-2 px-6 py-2 sm:px-10 sm:py-3 md:px-14 md:py-3 rounded-full 
          cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-4 
          animate__animated animate__pulse animate__delay-2s"
        >
          Home Page
        </Link>
      </div>
    </main>
  );
}

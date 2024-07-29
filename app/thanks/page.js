"use client";

import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Page() {
  return (
    <main className="poppins bg-base_color mt-6 mb-20">
      <div className="w-[90%] md:w-[60%] mx-auto mt flex flex-col items-center justify-center h-[550px] p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-base_text mb-6 text-center">
          Thank You
        </h1>
        <p className="text-white text-xl sm:text-2xl md:text-3xl text-center">
          Your Order was completed successfully.
        </p>
        <div className="text-white flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-3 text-center sm:text-left">
          <RiCustomerService2Fill className="text-3xl" />
          <p className="text-lg sm:text-xl">
            Our sales team will get in touch with you shortly to discuss details.
          </p>
        </div>
        <Link
          href="https://ziprus-chemicals.vercel.app/"
          className="text-white bg-base_color border-2 px-8 py-3 sm:px-14 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-4 text-center"
        >
          Home Page
        </Link>
      </div>
    </main>
  );
}

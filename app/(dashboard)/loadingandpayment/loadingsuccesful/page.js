"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="poppins bg-base_color mt-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-center h-[550px]"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl text-base_text mb-6"
        >
          Thank You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-white text-lg sm:text-2xl md:text-3xl text-center"
        >
          Your record / report is submitted successfully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="https://ziprus-chemicals.vercel.app/loadingandpayment"
            className="text-white bg-base_color border-2 px-6 py-2 sm:px-10 sm:py-3 md:px-14 md:py-3 rounded-full 
            cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-4"
          >
            Home Page
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

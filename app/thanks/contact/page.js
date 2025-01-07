"use client";

import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="poppins bg-base_color pt-40 mb-10 pb-10">
      <div className="w-[90%] sm:w-[70%] lg:w-[60%] mx-auto mt-6 flex flex-col items-center justify-center h-auto sm:h-[550px]">
        {/* Animating the Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl text-base_text mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You
        </motion.h1>

        {/* Animating the Subtext */}
        <motion.p
          className="text-white text-xl sm:text-2xl lg:text-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          For Contacting Us.
        </motion.p>

        {/* Animating the Icon and Paragraph */}
        <motion.div
          className="text-white flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <RiCustomerService2Fill className="text-3xl" />
          <p className="text-center sm:text-left text-lg sm:text-xl">
            We will get in touch with you shortly, please feel free to go through our website.
          </p>
        </motion.div>

        {/* Animating the Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="text-white bg-base_color border-2 px-8 py-3 sm:px-14 rounded-full cursor-pointer hover:bg-lime-950 ease-in-out duration-300 mt-6 block"
          >
            Go back
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

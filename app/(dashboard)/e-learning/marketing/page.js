"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-base_two to-base_color min-h-screen flex items-center justify-center text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-6 text-base_text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We're working on something amazing for our marketing department. Stay
          tuned!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative h-1 w-64 mx-auto bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-base_text"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

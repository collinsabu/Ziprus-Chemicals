"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base_color via-base_two to-base_color flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base_text mb-4 leading-tight">
          Welcome Back, Admin 👋
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
          Manage your operations with ease. Use the menu to navigate through your dashboard and take full control of your platform.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/viewreport/dailyReportsList">
            <button className="px-6 py-3 rounded-xl bg-base_text text-base_color font-semibold hover:opacity-90 transition">
              View Reports
            </button>
          </Link>
         <Link href="/report">
          <button className="px-6 py-3 rounded-xl border border-base_text text-base_text font-semibold hover:bg-base_text hover:text-base_color transition">
            Enter Report
          </button>
         </Link>
        </div>
      </motion.div>
    </div>
  );
}

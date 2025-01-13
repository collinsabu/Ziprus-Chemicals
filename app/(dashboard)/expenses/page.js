"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
import { FiEdit, FiTrash } from "react-icons/fi";
import ExpenseModal from "./ExpenseModal";
import EditExpenseModal from "./EditExpenseModal";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [totalMonth, setTotalMonth] = useState(0);
  const [totalAllTime, setTotalAllTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/expenses?month=${month + 1}&year=${year}`);
      if (res.ok) {
        const data = await res.json();
        setExpenses(data);

        // Calculate total for the month
        const monthTotal = data.reduce((sum, expense) => sum + expense.amount, 0);
        setTotalMonth(monthTotal);
      } else {
        throw new Error("Failed to fetch monthly expenses");
      }
    } catch (error) {
      toast.error("Failed to fetch expenses");
      console.error("Error fetching expenses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTotalAllTime = async () => {
    try {
      const res = await fetch("/api/expenses/total", {
        method: "GET",
        headers: { "Cache-Control": "no-cache", "Pragma": "no-cache", "Expires": "0" },
      });
      if (res.ok) {
        const data = await res.json();
        setTotalAllTime(data.total || 0);
      } else {
        throw new Error("Failed to fetch all-time total expenses");
      }
    } catch (error) {
      toast.error("Failed to fetch total expenses");
      console.error("Error fetching total expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [month, year]);

  useEffect(() => {
    fetchTotalAllTime();
  }, [expenses]); // Re-fetch when 'expenses' changes

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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/expenses/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Expense deleted successfully");
        await fetchExpenses();
        await fetchTotalAllTime(); // Refresh total after deletion
      } else {
        throw new Error("Failed to delete expense");
      }
    } catch (error) {
      toast.error("Error deleting expense");
      console.error("Error deleting expense:", error);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen sm:px-7 px-4 pt-10 py-12 bg-gradient-to-b from-base_two via-base_color to-base_color mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center">
          Expense Tracker
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 mb-6">
          <button
            onClick={handlePrevMonth}
            className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-base_text to-base_color text-white font-semibold rounded-lg shadow-lg hover:from-base_text hover:to-base_two transition-all"
          >
            Previous Month
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-base_text to-base_color text-white font-semibold rounded-lg shadow-lg hover:from-base_text hover:to-base_two transition-all"
          >
            Next Month
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-white text-base_two rounded-lg shadow-md p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">Total This Month</h3>
            <p className="text-3xl font-bold">₦{totalMonth}</p>
          </motion.div>
          <motion.div
            className="bg-white text-base_two rounded-lg shadow-md p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">Total All Time</h3>
            <p className="text-3xl font-bold">₦{totalAllTime}</p>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <ExpenseModal
            closeModal={() => setIsModalOpen(false)}
            fetchExpenses={fetchExpenses}
          />
        )}
        {isEditModalOpen && expenseToEdit && (
          <EditExpenseModal
            closeModal={() => setIsEditModalOpen(false)}
            fetchExpenses={fetchExpenses}
            expenseToEdit={expenseToEdit}
          />
        )}
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}

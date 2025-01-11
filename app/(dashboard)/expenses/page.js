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
        throw new Error();
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
        headers: { "Cache-Control": "no-cache" }, // Prevent caching
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Total all time:", data.total); // Debug log
        setTotalAllTime(data.total || 0);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Failed to fetch total expenses");
      console.error("Error fetching total expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
    fetchTotalAllTime();
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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/expenses/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Expense deleted successfully");
        await fetchExpenses();
        await fetchTotalAllTime(); // Refresh total after deletion
      } else {
        throw new Error();
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
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:from-green-400 hover:to-green-600 transition-all"
          >
            Add Expense
          </button>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="h-96 flex items-center justify-center">
          <motion.div
            className="spinner border-t-4 border-white border-solid rounded-full w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          ></motion.div>
        </div>
      ) : expenses.length === 0 ? (
        <motion.div
          className="text-center mt-20 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl font-semibold">No expenses found for this month!</p>
          <p className="text-gray-300 mt-2">
            Adjust the month or year to view other expenses.
          </p>
        </motion.div>
      ) : (
        <motion.ul
          className="grid gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {expenses.map((expense) => (
            <motion.li
              key={expense._id}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
            >
              <Link href={`/expenses/${expense._id}`} className="flex-1">
                <div>
                  <h2 className="font-bold text-lg text-base_two">
                    {expense.title}
                  </h2>
                  <p className="text-gray-600">Amount: ₦{expense.amount}</p>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>
              </Link>
              <div className="flex gap-4">
                <button
                  className="text-base_two hover:text-base_color"
                  onClick={() => {
                    setIsEditModalOpen(true);
                    setExpenseToEdit(expense);
                  }}
                >
                  <FiEdit size={20} />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(expense._id)}
                >
                  <FiTrash size={20} />
                </button>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      )}

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

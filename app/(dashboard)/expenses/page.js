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
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Failed to fetch expenses");
    } finally {
      setIsLoading(false);
    }
  };

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

  useEffect(() => {
    fetchExpenses();
  }, [month, year]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/expenses/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Expense deleted successfully");
        fetchExpenses();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Error deleting expense");
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen sm:px-7 px-4 pt-40 py-12 bg-gradient-to-b from-base_color to-base_two">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center">
    Expense Tracker
  </h1>
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 mb-6">
    <button
      onClick={handlePrevMonth}
      className="w-full sm:w-auto px-4 py-2 bg-base_text text-white font-semibold rounded-lg hover:bg-base_two"
    >
      Previous Month
    </button>
    <h2 className="text-xl sm:text-2xl font-bold text-base_text text-center sm:text-left">
      {monthNames[month]} {year}
    </h2>
    <button
      onClick={handleNextMonth}
      className="w-full sm:w-auto px-4 py-2 bg-base_text text-white font-semibold rounded-lg hover:bg-base_two"
    >
      Next Month
    </button>
  </div>
  <div className="flex justify-center">
    <button
      onClick={() => setIsModalOpen(true)}
      className="w-full sm:w-auto px-6 py-3 bg-base_text text-white font-semibold rounded-lg shadow-md hover:bg-base_two transition duration-300"
    >
      Add Expense
    </button>
  </div>
</motion.div>


      {isLoading ? (
        <div className="h-96 flex items-center justify-center">
          <motion.div
            className="spinner border-t-4 border-blue-600 border-solid rounded-full w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          ></motion.div>
        </div>
      ) : expenses.length === 0 ? (
        <motion.div
          className="text-center mt-20 text-base_two"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl font-semibold">No expenses found for this month!</p>
          <p className="text-gray-500 mt-2">
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
                  className="text-base_two hover:text-base_text"
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

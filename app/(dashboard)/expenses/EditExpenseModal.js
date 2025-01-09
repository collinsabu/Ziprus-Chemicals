"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditExpenseModal({ closeModal, fetchExpenses, expenseToEdit }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    title: "",
    amount: "",
    itemPurchased: "",
    fullDescription: "",
  });

  useEffect(() => {
    if (expenseToEdit) {
      setForm({
        date: expenseToEdit.date,
        time: expenseToEdit.time,
        title: expenseToEdit.title,
        amount: expenseToEdit.amount,
        itemPurchased: expenseToEdit.itemPurchased,
        fullDescription: expenseToEdit.fullDescription,
      });
    }
  }, [expenseToEdit]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/expenses/${expenseToEdit._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Expense updated successfully!");
        fetchExpenses();
        closeModal();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Error updating expense");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-base_two p-6 rounded-lg shadow-xl w-full max-w-lg mx-4 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-base_text hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Edit Expense
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Time
            </label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          {/* Amount */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Amount
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          {/* Item Purchased */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Item Purchased
            </label>
            <input
              type="text"
              value={form.itemPurchased}
              onChange={(e) =>
                setForm({ ...form, itemPurchased: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          {/* Full Description */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Full Description
            </label>
            <textarea
              value={form.fullDescription}
              onChange={(e) =>
                setForm({ ...form, fullDescription: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
              rows="3"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 bg-base_color text-white rounded-md hover:base_text transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-base_text text-white rounded-md hover:bg-base_text transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
        <ToastContainer />
      </motion.div>
    </motion.div>
  );
}

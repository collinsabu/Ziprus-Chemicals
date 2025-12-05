"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BusinessPartnerForm({ onPartnerAdded, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/business-partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        onPartnerAdded(result);
      } else {
        console.error("Failed to add partner.");
      }
    } catch (error) {
      console.error("An error occurred.", error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-base_color p-6 rounded-md w-11/12 max-w-md relative"
          initial={{ y: "-50%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "-50%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
          >
            &times;
          </button>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Add Business Partner</h2>

            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Category (Freely Typed)</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                placeholder="e.g., Miner, Tipper Driver, Welder, Customer, Supplier..."
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md text-black"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-base_text text-white p-2 rounded-md hover:bg-base_two"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

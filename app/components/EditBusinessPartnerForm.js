"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export default function EditBusinessPartnerForm({
  partner,
  onPartnerEdited,
  onClose,
}) {
  const [formData, setFormData] = useState(partner);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/business-partners?id=${partner._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        onPartnerEdited(result);
        toast.success("Partner updated successfully!");
      } else {
        toast.error("Failed to update partner.");
      }
    } catch (error) {
      console.error("An error occurred.", error);
      toast.error("An error occurred while updating.");
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
          className="bg-white p-6 rounded-md w-11/12 max-w-md relative"
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
            <h2 className="text-xl font-semibold mb-4">Edit Business Partner</h2>
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
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
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Miners">Miners</option>
                <option value="Tipper">Tipper</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

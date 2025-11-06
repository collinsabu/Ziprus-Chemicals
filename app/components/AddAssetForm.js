"use client";

import { useState } from "react";

const AddAssetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    purchaseDate: "",
    purchaseCost: "",
    supplier: "",
    condition: "Good",
    status: "Available",
    assignedTo: "",
    location: "",
    serialNumber: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/assets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Asset recorded successfully!");
        setFormData({
          name: "",
          category: "",
          purchaseDate: "",
          purchaseCost: "",
          supplier: "",
          condition: "Good",
          status: "Available",
          assignedTo: "",
          location: "",
          serialNumber: "",
          description: "",
        });
      } else {
        setMessage("❌ Error saving asset.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("❌ Failed to connect to server.");
    }
  };

  return (
    <div className="bg-base_text min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-base_color text-white p-6 md:p-10 rounded shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Record New Asset / Property
        </h2>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">Asset Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              placeholder="e.g., Electronics, Vehicles"
            />
          </div>

          {/* Purchase Date & Cost */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Purchase Date</label>
              <input
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Purchase Cost (₦)</label>
              <input
                type="number"
                name="purchaseCost"
                value={formData.purchaseCost}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
                placeholder="e.g., 50000"
              />
            </div>
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2 font-semibold">Supplier</label>
            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              placeholder="e.g., Jumia, Konga"
            />
          </div>

          {/* Condition & Status */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
              >
                <option>New</option>
                <option>Good</option>
                <option>Damaged</option>
                <option>Disposed</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-semibold">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
              >
                <option>Available</option>
                <option>In Use</option>
                <option>Under Maintenance</option>
                <option>Disposed</option>
              </select>
            </div>
          </div>

          {/* Assigned To & Location */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Assigned To</label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
                placeholder="Employee or Department"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-black"
                placeholder="e.g., Lagos Office"
              />
            </div>
          </div>

          {/* Serial Number */}
          <div>
            <label className="block mb-2 font-semibold">Serial Number / Model</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              placeholder="e.g., SN-12345"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              rows={3}
              placeholder="Additional notes about this asset..."
            />
          </div>

          <button
            type="submit"
            className="bg-base_two hover:bg-base_text text-white py-2 px-6 rounded mt-4 w-full font-semibold"
          >
            Save Asset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAssetForm;

"use client";

import { useState } from "react";

const AddAssetForm = ({ onSuccess, onClose }) => {
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

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      // append text fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // append image
      if (imageFile) {
        data.append("image", imageFile);
      }

      const res = await fetch("/api/assets", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (!res.ok) {
        setMessage(json.error || "❌ Failed to save asset");
        setLoading(false);
        return;
      }

      setMessage("✅ Asset created successfully!");

      // reset form
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

      setImageFile(null);

      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* NAME */}
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Asset Name"
        className="w-full p-2 border rounded"
        required
      />

      {/* CATEGORY */}
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />

      {/* DATE + COST */}
      <div className="flex gap-2">
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="purchaseCost"
          value={formData.purchaseCost}
          onChange={handleChange}
          placeholder="Cost"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* SUPPLIER */}
      <input
        name="supplier"
        value={formData.supplier}
        onChange={handleChange}
        placeholder="Supplier"
        className="w-full p-2 border rounded"
      />

      {/* CONDITION + STATUS */}
      <div className="flex gap-2">
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Good</option>
          <option>New</option>
          <option>Damaged</option>
          <option>Disposed</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Available</option>
          <option>In Use</option>
          <option>Maintenance</option>
          <option>Disposed</option>
        </select>
      </div>

      {/* ASSIGNED + LOCATION */}
      <div className="flex gap-2">
        <input
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          placeholder="Assigned To"
          className="w-full p-2 border rounded"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* SERIAL */}
      <input
        name="serialNumber"
        value={formData.serialNumber}
        onChange={handleChange}
        placeholder="Serial Number"
        className="w-full p-2 border rounded"
      />

      {/* DESCRIPTION */}
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />

      {/* IMAGE UPLOAD */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="w-full"
      />

      {/* MESSAGE */}
      {message && (
        <p className="text-sm text-center text-blue-600">{message}</p>
      )}

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        {loading ? "Saving..." : "Save Asset"}
      </button>
    </form>
  );
};

export default AddAssetForm;
"use client";

import React, { useEffect, useState } from "react";

export default function AssetsPage() {
  const [assets, setAssets] = useState([]);
  const [editingAsset, setEditingAsset] = useState(null);
  const [formData, setFormData] = useState({});

  // Fetch all assets from API
  const fetchAssets = async () => {
    try {
      const res = await fetch("/api/assets", { cache: "no-store" });
      const data = await res.json();
      setAssets(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this asset?")) return;

    try {
      await fetch(`/api/assets?id=${id}`, {
        method: "DELETE",
      });
      fetchAssets();
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };

  // Handle Edit
  const handleEditClick = (asset) => {
    setEditingAsset(asset._id);
    setFormData(asset);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save Edited Asset
  const handleSave = async () => {
    try {
      const res = await fetch(`/api/assets?id=${editingAsset}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEditingAsset(null);
        fetchAssets();
      } else {
        alert("Error updating asset");
      }
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  };

  return (
    <div className="bg-base_two min-h-screen py-10 px-4 sm:px-10 pt-56">
      <h1 className="text-3xl font-bold text-center mb-10 text-base_text">
        Company Assets
      </h1>

      {assets.length === 0 ? (
        <p className="text-center text-gray-600">No assets found.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 ">
          <table className="min-w-full bg-white">
            <thead className="bg-base_color text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Assigned To</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Condition</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Purchase Cost</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr
                  key={asset._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {editingAsset === asset._id ? (
                    <>
                      <td className="py-2 px-4">
                        <input
                          name="name"
                          value={formData.name || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="category"
                          value={formData.category || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="assignedTo"
                          value={formData.assignedTo || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="location"
                          value={formData.location || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="condition"
                          value={formData.condition || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="status"
                          value={formData.status || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <input
                          name="purchaseCost"
                          value={formData.purchaseCost || ""}
                          onChange={handleInputChange}
                          className="border p-1 rounded w-full"
                          type="number"
                        />
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          onClick={handleSave}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingAsset(null)}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-2 px-4">{asset.name}</td>
                      <td className="py-2 px-4">{asset.category}</td>
                      <td className="py-2 px-4">{asset.assignedTo}</td>
                      <td className="py-2 px-4">{asset.location}</td>
                      <td className="py-2 px-4">{asset.condition}</td>
                      <td className="py-2 px-4">{asset.status}</td>
                      <td className="py-2 px-4">
                        ₦{asset.purchaseCost.toLocaleString()}
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          onClick={() => handleEditClick(asset)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(asset._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

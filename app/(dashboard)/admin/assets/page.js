"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../../components/Modal";
import AddAssetForm from "../../../components/AddAssetForm";

export default function AssetsPage() {
  const [assets, setAssets] = useState([]);
  const [editingAsset, setEditingAsset] = useState(null);
  const [formData, setFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  // FETCH ASSETS
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

  // DELETE
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this asset?")) return;

    await fetch(`/api/assets?id=${id}`, { method: "DELETE" });
    fetchAssets();
  };

  // EDIT START
  const handleEditClick = (asset) => {
    setSelectedAsset(null);
    setEditingAsset(asset._id);
    setFormData(asset);
  };

  // INPUT CHANGE
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE UPDATE
  const handleSave = async () => {
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
  };

  return (
    <div className="bg-base_two min-h-screen py-10 px-4 sm:px-10 pt-56">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-base_text">
          Company Assets
        </h1>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          + Add Asset
        </button>
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <Modal
          title="Add New Asset"
          onClose={() => setShowAddModal(false)}
        >
          <AddAssetForm
            onSuccess={() => {
              setShowAddModal(false);
              fetchAssets();
            }}
          />
        </Modal>
      )}

      {/* DETAILS MODAL */}
      {selectedAsset && (
        <Modal
          title="Asset Details"
          onClose={() => setSelectedAsset(null)}
        >
          <div className="space-y-3 text-sm text-gray-700">

            {selectedAsset.image && (
              <img
                src={selectedAsset.image}
                className="w-full h-48 object-cover rounded"
              />
            )}

            <p><b>Name:</b> {selectedAsset.name}</p>
            <p><b>Category:</b> {selectedAsset.category}</p>
            <p><b>Assigned:</b> {selectedAsset.assignedTo}</p>
            <p><b>Location:</b> {selectedAsset.location}</p>
            <p><b>Status:</b> {selectedAsset.status}</p>
            <p><b>Condition:</b> {selectedAsset.condition}</p>
            <p><b>Cost:</b> ₦{selectedAsset.purchaseCost?.toLocaleString()}</p>
            <p>
              <b>Date:</b>{" "}
              {selectedAsset.purchaseDate
                ? new Date(selectedAsset.purchaseDate).toLocaleDateString()
                : "-"}
            </p>

            <div>
              <b>Description:</b>
              <p className="text-gray-600 mt-1">
                {selectedAsset.description || "No description"}
              </p>
            </div>

          </div>
        </Modal>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">

        <table className="w-full text-sm border-collapse">

          <thead className="bg-base_color text-white">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Assigned</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Cost</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset, i) => (
              <motion.tr
                key={asset._id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="border-b hover:bg-gray-50"
              >

                {/* IMAGE */}
                <td className="p-3">
                  {asset.image ? (
                    <img
                      src={asset.image}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">No image</span>
                  )}
                </td>

                {/* NAME */}
                <td className="p-3">
                  {editingAsset === asset._id ? (
                    <input
                      name="name"
                      value={formData.name || ""}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    asset.name
                  )}
                </td>

                {/* CATEGORY (READ ONLY) */}
                <td className="p-3">{asset.category}</td>

                {/* ASSIGNED */}
                <td className="p-3">
                  {editingAsset === asset._id ? (
                    <input
                      name="assignedTo"
                      value={formData.assignedTo || ""}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    asset.assignedTo
                  )}
                </td>

                {/* LOCATION */}
                <td className="p-3">
                  {editingAsset === asset._id ? (
                    <input
                      name="location"
                      value={formData.location || ""}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    asset.location
                  )}
                </td>

                {/* STATUS */}
                <td className="p-3">
                  {editingAsset === asset._id ? (
                    <select
                      name="status"
                      value={formData.status || ""}
                      onChange={handleInputChange}
                      className="border p-1 rounded w-full"
                    >
                      <option>Available</option>
                      <option>In Use</option>
                      <option>Maintenance</option>
                      <option>Disposed</option>
                    </select>
                  ) : (
                    asset.status
                  )}
                </td>

                {/* COST (READ ONLY) */}
                <td className="p-3">
                  ₦{asset.purchaseCost?.toLocaleString()}
                </td>

                {/* DATE */}
                <td className="p-3">
                  {asset.purchaseDate
                    ? new Date(asset.purchaseDate).toLocaleDateString()
                    : "-"}
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-2">

                  {editingAsset === asset._id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => setEditingAsset(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setSelectedAsset(asset)}
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => handleEditClick(asset)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(asset._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}

                </td>
              </motion.tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
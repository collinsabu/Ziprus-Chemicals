// models/Asset.js

import mongoose, { Schema } from "mongoose";

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true, // e.g. "Electronics", "Machinery", etc.
  },
  purchaseDate: {
    type: String,
    required: true,
  },
  purchaseCost: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
  },
  condition: {
    type: String,
    default: "Good", // Options could be "Good", "Needs Repair", etc.
  },
  status: {
    type: String,
    default: "Available", // e.g. "In Use", "Disposed", etc.
  },
  assignedTo: {
    type: String, // Employee name or department
  },
  location: {
    type: String, // Where the asset is stored or used
  },
  serialNumber: {
    type: String, // Optional serial or identification number
  },
  description: {
    type: String, // Notes or details about the item
  },
}, { timestamps: true });

const Asset = mongoose.models.Asset || mongoose.model("Asset", assetSchema);

export default Asset;
// models/Asset.js

import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    purchaseDate: {
      type: String,
      required: true,
    },

    purchaseCost: {
      type: Number,
      required: true,
    },

    supplier: String,

    condition: {
      type: String,
      default: "Good",
    },

    status: {
      type: String,
      default: "Available",
    },

    assignedTo: String,

    location: String,

    serialNumber: String,

    description: String,

    // NEW
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Asset =
  mongoose.models.Asset || mongoose.model("Asset", assetSchema);

export default Asset;
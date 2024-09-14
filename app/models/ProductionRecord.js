// src/models/ProductionRecord.js

import mongoose from "mongoose";

const ProductionRecordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  workerId: { // Changed from customerId to workerId
    type: String,
    required: true,
    enum: ["ZGCW01", "ZGCW02", "ZGCW03", "ZGCW04", "ZGCW05", "ZGCW06", "ZGCW07", "ZGCW08"],
  },
  materialType: {
    type: String,
    required: true,
    enum: ["Feed", "Glass", "Texcoat", "Sugar", "Dust", "White", "Off-white", "Calcite"]
  },
  totalProduce: {
    type: Number,
    required: true,
  },
  amountPerBag: { // New field
    type: Number,
    required: true,
  },
  totalProductionAmount: { // New field
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
});

const ProductionRecord = mongoose.models.ProductionRecord || mongoose.model("ProductionRecord", ProductionRecordSchema);

export default ProductionRecord;

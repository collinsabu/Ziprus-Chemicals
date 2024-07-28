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
  materialType: {
    type: String,
    required: true,
    enum: ["Feed", "Glass", "Texcoat", "Sugar", "Dust", "White", "Off-white", "Calcite"]
  },
  totalProduce: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  balance: {
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

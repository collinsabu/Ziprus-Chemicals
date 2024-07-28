// src/models/DespatchRecord.js

import mongoose from "mongoose";

const DespatchRecordSchema = new mongoose.Schema({
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
  vehicleNumber: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  numberLoaded: {
    type: Number,
    required: true,
  },
  balanceBag: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
});

const DespatchRecord = mongoose.models.DespatchRecord || mongoose.model("DespatchRecord", DespatchRecordSchema);

export default DespatchRecord;

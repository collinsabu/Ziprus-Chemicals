// src/models/DespatchRecord.js

import mongoose from "mongoose";

const DespatchRecordSchema = new mongoose.Schema({
  date: String,
  time: String,
  materialType: String,
  vehicleNumber: String,
  driverName: String,
  destination: String,
  numberLoaded: Number,
  balanceBag: Number,
  tonnage: Number,    // ✅ ADD THIS
  comment: String,
});

export default mongoose.models.DespatchRecord ||
  mongoose.model("DespatchRecord", DespatchRecordSchema);

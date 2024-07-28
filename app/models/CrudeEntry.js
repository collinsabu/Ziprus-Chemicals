// src/models/CrudeEntry.js

import mongoose from "mongoose";

const CrudeEntrySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  materialKind: {
    type: String,
    required: true,
  },
  materialType: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverNumber: {
    type: String,
    required: true,
  },
  tonnage: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
});

const CrudeEntry = mongoose.models.CrudeEntry || mongoose.model("CrudeEntry", CrudeEntrySchema);

export default CrudeEntry;

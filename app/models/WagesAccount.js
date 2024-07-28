// src/models/WagesAccount.js

import mongoose from "mongoose";

const WagesAccountSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  workerName: {
    type: String,
    required: true,
  },
  bags: {
    type: Number,
    required: true,
  },
  materialType: {
    type: String,
    required: true,
    enum: ["Feed", "Glass", "Texcoat", "Sugar", "Dust", "White", "Off-white", "Calcite"]
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

const WagesAccount = mongoose.models.WagesAccount || mongoose.model("WagesAccount", WagesAccountSchema);

export default WagesAccount;

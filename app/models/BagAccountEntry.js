// src/models/BagAccountEntry.js

import mongoose from "mongoose";

const BagAccountEntrySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
    time: {
    type: String,
    required: true,
  },
  purchase: {
    type: Number,
    required: true,
  },
  used: {
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

const BagAccountEntry = mongoose.models.BagAccountEntry || mongoose.model("BagAccountEntry", BagAccountEntrySchema);

export default BagAccountEntry;

// src/models/CrudePayment.js

import mongoose from "mongoose";

const CrudePaymentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  amountSent: {
    type: Number,
    required: true,
  },
  sentTo: {
    type: String,
    required: true,
  },
  materialType: {
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

const CrudePayment = mongoose.models.CrudePayment || mongoose.model("CrudePayment", CrudePaymentSchema);

export default CrudePayment;

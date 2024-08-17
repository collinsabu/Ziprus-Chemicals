// src/app/models/CustomerPayment.js

import mongoose from "mongoose";

const CustomerPaymentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  customerUniqueID: { type: String, required: true },
  paymentAmount: { type: Number, required: true },
  summaryNote: { type: String, required: true },
});

const CustomerPayment =
  mongoose.models.CustomerPayment ||
  mongoose.model("CustomerPayment", CustomerPaymentSchema);

export default CustomerPayment;

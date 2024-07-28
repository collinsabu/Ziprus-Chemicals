// src/app/models/CustomerLoading.js

import mongoose from 'mongoose';

const CustomerLoadingSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  customerUniqueID: { type: String, required: true },
  materialType: { type: String, required: true },
  tonnage: { type: Number, required: true },
  priceByTonnage: { type: Number, required: true },
  location: { type: String, required: true },
  summaryNote: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.CustomerLoading || mongoose.model('CustomerLoading', CustomerLoadingSchema);

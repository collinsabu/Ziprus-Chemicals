// src/app/models/LightMonitoring.js

import mongoose from 'mongoose';

const LightMonitoringSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  numberOfBags: {
    type: Number,
    required: true,
  },
  light: {
    type: String,
    enum: ['Yes', 'No', 'Both'],
    required: true,
  },
  summaryNote: {
    type: String,
    required: true,
  },
});

export default mongoose.models.LightMonitoring || mongoose.model('LightMonitoring', LightMonitoringSchema);

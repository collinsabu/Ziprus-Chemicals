// src/app/models/DailyReport.js

import mongoose from 'mongoose';

const DailyReportSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  ideas: { type: String, required: true },
  challenges: { type: String, required: true },
  summaryNote: { type: String, required: true },
  employeeName: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.DailyReport || mongoose.model('DailyReport', DailyReportSchema);

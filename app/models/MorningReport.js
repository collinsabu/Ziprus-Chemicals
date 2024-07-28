// src/app/models/MorningReport.js

import mongoose from 'mongoose';

const MorningReportSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  planActivities: {
    type: String,
    required: true,
  },
  summaryNote: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
});

const MorningReport = mongoose.models.MorningReport || mongoose.model('MorningReport', MorningReportSchema);

export default MorningReport;

// src/app/models/SituationReport.js

import mongoose from 'mongoose';

const SituationReportSchema = new mongoose.Schema({
  date: 
  { type: String, 
    required: true 
  },
  time: 
  { type: String,
     required: true 
    },
  challenge: 
  { type: String,
     required: true 
    },
  solution: 
  { type: String, 
    required: true 
  },
  employeeName: 
  { type: String, 
    required: true 
  },
}, { timestamps: true });

export default mongoose.models.SituationReport || mongoose.model('SituationReport', SituationReportSchema);

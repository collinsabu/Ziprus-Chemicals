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
  workerId: { // Changed workerName to workerId
    type: String,
    required: true,
    enum: ["ZGCW01", "ZGCW02", "ZGCW03", "ZGCW04", "ZGCW05", "ZGCW06", "ZGCW07", "ZGCW08"]
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
  comment: {
    type: String,
    required: false,
  },
});

const WagesAccount = mongoose.models.WagesAccount || mongoose.model("WagesAccount", WagesAccountSchema);

export default WagesAccount;

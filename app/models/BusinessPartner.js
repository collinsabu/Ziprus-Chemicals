// app/models/BusinessPartner.js
import mongoose from "mongoose";

const BusinessPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Miners", "Tipper", "Truck", "Welder", "Other"],
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.BusinessPartner ||
  mongoose.model("BusinessPartner", BusinessPartnerSchema);

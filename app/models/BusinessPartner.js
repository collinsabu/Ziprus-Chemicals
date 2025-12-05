// app/models/BusinessPartner.js
import mongoose from "mongoose";

const BusinessPartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },

    // Allow ANY text category now
    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BusinessPartner ||
  mongoose.model("BusinessPartner", BusinessPartnerSchema);

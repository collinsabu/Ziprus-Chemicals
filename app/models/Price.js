import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema(
  {
    state: String,
    material: String,
    materialCost: Number,
    transportCost: Number,
    loadingCost: Number,
    profit: Number,
    pricePerTon: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Price ||
  mongoose.model("Price", PriceSchema);

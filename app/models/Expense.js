// 1. Expense Schema (app/models/Expense.js)
import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  itemPurchased: { type: String, required: true },
  fullDescription: { type: String, required: true },
});

export default mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);
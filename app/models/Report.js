import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
  {
    staffName: String,
    title: String,
    department: String,
    report: String,
  },
  { timestamps: true }
);

export default mongoose.models.Report ||
  mongoose.model("Report", ReportSchema);
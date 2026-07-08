import mongoose, { Schema } from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      trim: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    productInterest: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },

    // Automatically records where the lead came from
    pageVisited: {
      type: String,
    },

    // Lead management status
    status: {
      type: String,
      default: "New",
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Converted",
        "Lost",
      ],
    },
  },
  {
    timestamps: true,
  }
);


const Lead =
  mongoose.models.Lead ||
  mongoose.model("Lead", leadSchema);


export default Lead;
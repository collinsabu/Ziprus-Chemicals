// models/orderSchema.js

import mongoose, { Schema } from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: { 
    type: String, 
    required: true
   },
  email: { 
    type: String, 
    required: true 
  },
  phonenumber: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;

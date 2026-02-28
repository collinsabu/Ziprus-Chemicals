// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import connectMongoDB from "../../libs/mongodb"; // adjust path
import Contact from "../../models/contact";
import { NextResponse } from "next/server";

// pages/api/contacts/index.js
export async function GET() {
  try {
    await connectMongoDB();

    // 🔹 Sort by newest first
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).exec();

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return NextResponse.json({ error: "Error fetching contacts" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { fullname, email, phonenumber, message } = await request.json();

    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!fullname || !nameRegex.test(fullname.trim()))
      return NextResponse.json({ error: "Invalid full name" }, { status: 400 });

    if (!email || !emailRegex.test(email.trim()))
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });

    if (!phonenumber || !phoneRegex.test(phonenumber.trim()))
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });

    if (!message || message.trim().length < 10 || message.trim().length > 500)
      return NextResponse.json({ error: "Message must be 10-500 characters" }, { status: 400 });

    await connectMongoDB();

    const newContact = new Contact({ fullname, email, phonenumber, message });
    await newContact.save();

    return NextResponse.json({ message: "Contact Created", contact: newContact }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact:", error.message);
    return NextResponse.json({ error: "Error creating contact" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const result = await Contact.findByIdAndDelete(id);

    if (!result) {
      console.log(`contact not found with ID: ${id}`);
      return NextResponse.json({ message: "contact not found" }, { status: 404 });
    }

    console.log(`contact deleted with ID: ${id}`);
    return NextResponse.json({ message: "contact deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
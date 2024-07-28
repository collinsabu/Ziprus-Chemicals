// pages/api/contacts/index.js

import connectMongoDB from "../../libs/mongodb"; // Adjust the path as necessary
import Contact from "../../models/contact";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();
    const contacts = await Contact.find({});
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return NextResponse.json({ error: "Error fetching contacts" }, { status: 500 });
  }
}


export async function POST(request) {
   try {
     const { fullname, email, phonenumber, message } = await request.json();
 
     if (!fullname || !email || !phonenumber || !message) {
       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
     }
 
     await connectMongoDB();
 
     const newContact = new Contact({
       fullname,
       email,
       phonenumber,
       message,
     });
 
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
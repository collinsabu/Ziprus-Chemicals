import connectMongoDB from "../../../libs/mongodb"; // Adjust the import path according to your project structure
import Contact from "../../../models/contact"; // Adjust the import path according to your project structure
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();

    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json({ error: "Failed to fetch contact details" }, { status: 500 });
  }
}

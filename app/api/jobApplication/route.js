// app/api/jobApplication/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb"; // Ensure you're using the correct path to the MongoDB connection
import JobApplication from "../../models/JobApplication";

// This will handle the POST request
export async function POST(req) {
  try {
    // Parse the multipart form data using request.formData()
    const formData = await req.formData();

    // Extract fields from the formData
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const coverLetter = formData.get("coverLetter");
    const cvFile = formData.get("cv"); // This will be the file (Buffer)

    // Ensure required fields are present
    if (!fullName || !email || !phone || !position || !cvFile) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new Job Application record in the database
    const jobApplication = new JobApplication({
      fullName,
      email,
      phone,
      position,
      coverLetter,
      cv: Buffer.from(await cvFile.arrayBuffer()), // Convert file to Buffer for MongoDB
    });

    await jobApplication.save();

    // Return success response
    return NextResponse.json({ message: "Application submitted successfully." }, { status: 201 });

  } catch (error) {
    console.error("Error submitting job application:", error.message);
    return NextResponse.json({ error: "Error submitting job application." }, { status: 500 });
  }
}

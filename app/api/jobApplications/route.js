import { NextResponse } from 'next/server';
import connectMongoDB from "../../libs/mongodb";  // Adjust path as necessary
import JobApplication from "../../models/JobApplication"; // Adjust path as necessary

export async function GET() {
  try {
    await connectMongoDB();

    // Fetch all job applications from the database
    const applications = await JobApplication.find({}).sort({ createdAt: -1 });

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching job applications:", error.message);
    return NextResponse.json({ error: "Error fetching job applications." }, { status: 500 });
  }
}

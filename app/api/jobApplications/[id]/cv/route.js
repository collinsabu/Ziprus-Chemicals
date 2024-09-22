import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";  // Adjust path as necessary
import JobApplication from "../../../../models/JobApplication"; // Adjust path as necessary

export async function GET(req, { params }) {
  try {
    await connectMongoDB();

    // Extract application ID from the URL parameters
    const { id } = params;

    // Find the job application by its ID
    const application = await JobApplication.findById(id);

    if (!application || !application.cv) {
      return NextResponse.json({ error: "CV not found." }, { status: 404 });
    }

    // Set headers to serve the file as a download
    const headers = new Headers();
    headers.append("Content-Type", "application/octet-stream");
    headers.append("Content-Disposition", `attachment; filename="${application.fullName}_CV.pdf"`);

    return new NextResponse(application.cv, { headers });
  } catch (error) {
    console.error("Error downloading CV:", error.message);
    return NextResponse.json({ error: "Error downloading CV." }, { status: 500 });
  }
}

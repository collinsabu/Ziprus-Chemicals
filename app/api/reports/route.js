import dbConnect from '../../libs/mongodb';
import Report from "../../models/Report";
import { sendReportEmail } from "./email";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const report = await Report.create(body);

    // send email to admin
    await sendReportEmail(report);

    return Response.json({
      success: true,
      report,
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// optional: fetch reports
export async function GET() {
  await connectDB();

  const reports = await Report.find().sort({ createdAt: -1 });

  return Response.json(reports);
}
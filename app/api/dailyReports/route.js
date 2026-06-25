// Disable Vercel caching completely
// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import DailyReport from "../../models/DailyReport";
import { sendDailyReportEmail } from "./email";

export async function POST(request) {
  try {
    await connectMongoDB();

    const {
      date,
      time,
      ideas,
      challenges,
      summaryNote,
      employeeName,
    } = await request.json();

    const newDailyReport = new DailyReport({
      date,
      time,
      ideas,
      challenges,
      summaryNote,
      employeeName,
    });

    // Save report first
    await newDailyReport.save();

    // Send email notification
    try {
      await sendDailyReportEmail(newDailyReport);
    } catch (emailError) {
      console.error(
        "Daily report saved but email failed:",
        emailError
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Daily report created successfully",
        data: newDailyReport,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating daily report:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Error creating daily report",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await DailyReport.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching daily reports:", error.message);
    return NextResponse.json({ error: "Error fetching daily reports" }, { status: 500 });
  }
}

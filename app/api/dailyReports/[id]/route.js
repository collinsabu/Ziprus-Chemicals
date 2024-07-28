// src/app/api/dailyReports/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import DailyReport from "../../../models/DailyReport";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();

    const dailyReport = await DailyReport.findById(id);

    if (!dailyReport) {
      return NextResponse.json({ error: "Daily report not found" }, { status: 404 });
    }

    return NextResponse.json({ entry: dailyReport });
  } catch (error) {
    console.error("Error fetching daily report:", error.message);
    return NextResponse.json({ error: "Error fetching daily report" }, { status: 500 });
  }
}

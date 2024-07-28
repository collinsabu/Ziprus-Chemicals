// src/app/api/morningReports/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import MorningReport from "../../../models/MorningReport";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await MorningReport.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Morning report not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching morning report:", error.message);
    return NextResponse.json({ error: "Error fetching morning report" }, { status: 500 });
  }
}

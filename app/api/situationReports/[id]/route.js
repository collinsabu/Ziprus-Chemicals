// src/app/api/situationReports/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import SituationReport from "../../../models/SituationReport";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const { id } = params;
    const report = await SituationReport.findById(id);

    if (!report) {
      return NextResponse.json({ error: "Situation report not found" }, { status: 404 });
    }

    return NextResponse.json({ entry: report });
  } catch (error) {
    console.error("Error fetching situation report:", error.message);
    return NextResponse.json({ error: "Error fetching situation report" }, { status: 500 });
  }
}

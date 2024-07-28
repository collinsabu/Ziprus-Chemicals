// src/app/api/situationReports/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import SituationReport from "../../models/SituationReport";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, challenge, solution, employeeName } = await request.json();

    const newSituationReport = new SituationReport({
      date,
      time,
      challenge,
      solution,
      employeeName,
    });

    await newSituationReport.save();

    return NextResponse.json({ message: "Situation report created successfully", data: newSituationReport }, { status: 201 });
  } catch (error) {
    console.error("Error creating situation report:", error.message);
    return NextResponse.json({ error: "Error creating situation report" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await SituationReport.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching situation reports:", error.message);
    return NextResponse.json({ error: "Error fetching situation reports" }, { status: 500 });
  }
}

// src/app/api/morningReports/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import MorningReport from "../../models/MorningReport";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, planActivities, summaryNote, employeeName } = await request.json();

    const newMorningReport = new MorningReport({
      date,
      time,
      planActivities,
      summaryNote,
      employeeName,
    });

    await newMorningReport.save();

    return NextResponse.json({ message: "Morning report created successfully", data: newMorningReport }, { status: 201 });
  } catch (error) {
    console.error("Error creating morning report:", error.message);
    return NextResponse.json({ error: "Error creating morning report" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await MorningReport.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching morning reports:", error.message);
    return NextResponse.json({ error: "Error fetching morning reports" }, { status: 500 });
  }
}

// src/app/api/crudeEntries/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CrudeEntry from "../../models/CrudeEntry";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, materialKind, materialType, vehicleNumber, driverName, driverNumber, tonnage, comment } = await request.json();

    const newCrudeEntry = new CrudeEntry({
      date,
      time,
      materialKind,
      materialType,
      vehicleNumber,
      driverName,
      driverNumber,
      tonnage,
      comment,
    });

    await newCrudeEntry.save();

    return NextResponse.json({ message: "Crude entry created successfully", data: newCrudeEntry }, { status: 201 });
  } catch (error) {
    console.error("Error creating crude entry:", error.message);
    return NextResponse.json({ error: "Error creating crude entry" }, { status: 500 });
  }
}


export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await CrudeEntry.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching crude entries:", error.message);
    return NextResponse.json({ error: "Error fetching crude entries" }, { status: 500 });
  }
}

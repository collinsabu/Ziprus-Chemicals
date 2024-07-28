// src/app/api/despatchRecords/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import DespatchRecord from "../../models/DespatchRecord";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, materialType, vehicleNumber, driverName, destination, numberLoaded, balanceBag, comment } = await request.json();

    const newDespatchRecord = new DespatchRecord({
      date,
      time,
      materialType,
      vehicleNumber,
      driverName,
      destination,
      numberLoaded,
      balanceBag,
      comment,
    });

    await newDespatchRecord.save();

    return NextResponse.json({ message: "Despatch record created successfully", data: newDespatchRecord }, { status: 201 });
  } catch (error) {
    console.error("Error creating despatch record:", error.message);
    return NextResponse.json({ error: "Error creating despatch record" }, { status: 500 });
  }
}


export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await DespatchRecord.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching despatch records:", error.message);
    return NextResponse.json({ error: "Error fetching despatch records" }, { status: 500 });
  }
}
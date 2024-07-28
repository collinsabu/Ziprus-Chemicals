// src/app/api/bagAccountEntries/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import BagAccountEntry from "../../models/BagAccountEntry";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, purchase, used, balance, comment } = await request.json();

    const newBagAccountEntry = new BagAccountEntry({
      date,
      time,
      purchase,
      used,
      balance,
      comment,
    });

    await newBagAccountEntry.save();

    return NextResponse.json({ message: "Bag account entry created successfully", data: newBagAccountEntry }, { status: 201 });
  } catch (error) {
    console.error("Error creating bag account entry:", error.message);
    return NextResponse.json({ error: "Error creating bag account entry" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await BagAccountEntry.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bag account entries:", error.message);
    return NextResponse.json({ error: "Error fetching bag account entries" }, { status: 500 });
  }
}
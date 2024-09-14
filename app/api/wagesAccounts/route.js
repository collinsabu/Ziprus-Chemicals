import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import WagesAccount from "../../models/WagesAccount";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, workerId, bags, materialType, paid, comment } = await request.json();

    const newWagesAccount = new WagesAccount({
      date,
      time,
      workerId, // Updated from workerName to workerId
      bags,
      materialType,
      paid,
      comment,
    });

    await newWagesAccount.save();

    return NextResponse.json({ message: "Wages account record created successfully", data: newWagesAccount }, { status: 201 });
  } catch (error) {
    console.error("Error creating wages account record:", error.message);
    return NextResponse.json({ error: "Error creating wages account record" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await WagesAccount.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching wages account records:", error.message);
    return NextResponse.json({ error: "Error fetching wages account records" }, { status: 500 });
  }
}

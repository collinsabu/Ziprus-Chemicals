// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

// src/app/api/customerPayments/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CustomerPayment from "../../models/CustomerPayment";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, customerUniqueID, paymentAmount, summaryNote } = await request.json();

    const newCustomerPayment = new CustomerPayment({
      date,
      time,
      customerUniqueID,
      paymentAmount,
      summaryNote,
    });

    await newCustomerPayment.save();

    return NextResponse.json({ message: "Customer payment created successfully", data: newCustomerPayment }, { status: 201 });
  } catch (error) {
    console.error("Error creating customer payment:", error.message);
    return NextResponse.json({ error: "Error creating customer payment" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    if (!month || !year) {
      return NextResponse.json({ error: "Invalid month or year" }, { status: 400 });
    }

    // Adjust query to find entries that match the month and year (YYYY-MM format)
    const entries = await CustomerPayment.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`), // Match the `YYYY-MM` format
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer payments:", error.message);
    return NextResponse.json({ error: "Error fetching customer payments" }, { status: 500 });
  }
}

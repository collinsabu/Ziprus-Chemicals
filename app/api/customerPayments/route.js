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

export async function GET() {
  try {
    await connectMongoDB();

    const entries = await CustomerPayment.find({});
    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer payments:", error.message);
    return NextResponse.json({ error: "Error fetching customer payments" }, { status: 500 });
  }
}

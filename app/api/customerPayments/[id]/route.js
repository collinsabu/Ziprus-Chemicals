// src/app/api/customerPayments/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import CustomerPayment from "../../../models/CustomerPayment";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await CustomerPayment.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer payment:", error.message);
    return NextResponse.json({ error: "Error fetching customer payment" }, { status: 500 });
  }
}

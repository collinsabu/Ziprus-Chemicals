// src/app/api/crudePayments/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import CrudePayment from "../../../models/CrudePayment";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const payment = await CrudePayment.findById(id);

    if (!payment) {
      return NextResponse.json({ error: "Crude payment not found" }, { status: 404 });
    }

    return NextResponse.json({ payment }, { status: 200 });
  } catch (error) {
    console.error("Error fetching crude payment details:", error.message);
    return NextResponse.json({ error: "Error fetching crude payment details" }, { status: 500 });
  }
}

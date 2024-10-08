// src/app/api/crudePayments/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CrudePayment from "../../models/CrudePayment";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, amount, paidBy, comment } = await request.json();

    const newCrudePayment = new CrudePayment({
      date,
      amount,
      paidBy,
      comment,
    });

    await newCrudePayment.save();

    return NextResponse.json({ message: "Crude payment created successfully", data: newCrudePayment }, { status: 201 });
  } catch (error) {
    console.error("Error creating crude payment:", error.message);
    return NextResponse.json({ error: "Error creating crude payment" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const payments = await CrudePayment.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ payments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching crude payments:", error.message);
    return NextResponse.json({ error: "Error fetching crude payments" }, { status: 500 });
  }
}


// src/app/api/crudePayments/[id]/route.js

export async function DELETE(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const deletedPayment = await CrudePayment.findByIdAndDelete(id);

    if (!deletedPayment) {
      return NextResponse.json({ error: "Crude payment not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Crude payment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting crude payment:", error.message);
    return NextResponse.json({ error: "Error deleting crude payment" }, { status: 500 });
  }
}


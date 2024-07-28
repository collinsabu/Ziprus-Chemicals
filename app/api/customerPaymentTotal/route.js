// src/app/api/customerPaymentTotal/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CustomerPayment from "../../models/CustomerPayment";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const customerUniqueID = searchParams.get("customerUniqueID");

  try {
    await connectMongoDB();

    const totalPayment = await CustomerPayment.aggregate([
      { $match: { customerUniqueID } },
      {
        $group: {
          _id: null,
          total: { $sum: "$paymentAmount" }
        }
      }
    ]);

    return NextResponse.json({ total: totalPayment[0]?.total || 0 });
  } catch (error) {
    console.error("Error fetching customer payment total:", error.message);
    return NextResponse.json({ error: "Error fetching customer payment total" }, { status: 500 });
  }
}

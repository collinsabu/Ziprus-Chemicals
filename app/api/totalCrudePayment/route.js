// src/app/api/totalCrudePayment/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CrudePayment from "../../models/CrudePayment";

export async function GET(request) {
  try {
    await connectMongoDB();

    const total = await CrudePayment.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$tonnage" }, // Assuming 'tonnage' is the field storing the amount in tons
        },
      },
    ]);

    return NextResponse.json({ total: total[0]?.total || 0 }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total crude payment:", error.message);
    return NextResponse.json({ error: "Error fetching total crude payment" }, { status: 500 });
  }
}

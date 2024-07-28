// src/app/api/totalCustomerLoading/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CustomerLoading from "../../models/CustomerLoading";

export async function GET() {
  try {
    await connectMongoDB();

    const totalCustomerLoading = await CustomerLoading.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$tonnage" },
        },
      },
    ]);

    return NextResponse.json({ total: totalCustomerLoading[0]?.total || 0 });
  } catch (error) {
    console.error("Error fetching total customer loading:", error.message);
    return NextResponse.json({ error: "Error fetching total customer loading" }, { status: 500 });
  }
}

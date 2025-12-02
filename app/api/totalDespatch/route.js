// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import DespatchRecord from "../../models/DespatchRecord";

export async function GET(request) {
  try {
    await connectMongoDB();

    // SUM THE TONNAGE FIELD (not numberLoaded)
    const totalDespatch = await DespatchRecord.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$tonnage" }, // <-- FIXED HERE
        },
      },
    ]);

    return NextResponse.json(
      { total: totalDespatch[0]?.total || 0 },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Error fetching total despatch:", error.message);
    return NextResponse.json(
      { error: "Error fetching total despatch" },
      { status: 500 }
    );
  }
}

// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import DespatchRecord from "../../models/DespatchRecord";

export async function GET(request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Perform aggregation to calculate the total of "numberLoaded"
    const totalDespatch = await DespatchRecord.aggregate([
      {
        $group: {
          _id: null, // Grouping by "null" calculates the total across all documents
          total: { $sum: "$numberLoaded" }, // Summing the "numberLoaded" field
        },
      },
    ]);

    // Return the calculated total
    return NextResponse.json(
      { total: totalDespatch[0]?.total || 0 }, // Handle case where no records exist
      { headers: { "Cache-Control": "no-store" } } // Disable caching
    );
  } catch (error) {
    console.error("Error fetching total despatch:", error.message);
    return NextResponse.json(
      { error: "Error fetching total despatch" },
      { status: 500 }
    );
  }
}

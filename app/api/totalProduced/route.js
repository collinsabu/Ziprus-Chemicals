// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import ProductionRecord from "../../models/ProductionRecord";

export async function GET(request) {
  try {
    await connectMongoDB();

    const totalProduced = await ProductionRecord.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$totalProduce" },
        },
      },
    ]);

    return new NextResponse(
      JSON.stringify({ total: totalProduced[0]?.total || 0 }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching total produced:", error.message);

    return NextResponse.json(
      { error: "Error fetching total produced" },
      { status: 500 }
    );
  }
}

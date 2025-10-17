// src/app/api/crudeTotal/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CrudeEntry from "../../models/CrudeEntry";

// ⛔ Force dynamic rendering (no static caching by Next.js)
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongoDB();

    const crudeTotal = await CrudeEntry.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$tonnage" },
        },
      },
    ]);

    const total = crudeTotal.length > 0 ? crudeTotal[0].total : 0;
    return NextResponse.json({ total });
  } catch (error) {
    console.error("Error fetching crude total:", error.message);
    return NextResponse.json(
      { error: "Error fetching crude total" },
      { status: 500 }
    );
  }
}

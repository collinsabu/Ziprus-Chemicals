import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import BagAccountEntry from "../../models/BagAccountEntry";

export async function GET(request) {
  try {
    await connectMongoDB();

    const totalPurchases = await BagAccountEntry.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$purchase" },
        },
      },
    ]);

    return NextResponse.json({ total: totalPurchases[0]?.total || 0 });
  } catch (error) {
    console.error("Error fetching total purchases:", error.message);
    return NextResponse.json({ error: "Error fetching total purchases" }, { status: 500 });
  }
}

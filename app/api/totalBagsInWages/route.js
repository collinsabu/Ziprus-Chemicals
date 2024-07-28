import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import WagesAccount from "../../models/WagesAccount";

export async function GET(request) {
  try {
    await connectMongoDB();

    const totalBagsInWages = await WagesAccount.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$bags" },
        },
      },
    ]);

    return NextResponse.json({ total: totalBagsInWages[0]?.total || 0 });
  } catch (error) {
    console.error("Error fetching total bags in wages:", error.message);
    return NextResponse.json({ error: "Error fetching total bags in wages" }, { status: 500 });
  }
}


// ✅ Force dynamic to disable caching
export const dynamic = "force-dynamic";
export const revalidate = 0;


import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CrudePayment from "../../models/CrudePayment";


export async function GET() {
  try {
    await connectMongoDB();
    const total = await CrudePayment.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$tonnage" },
        },
      },
    ]);

    return NextResponse.json({ total: total[0]?.total || 0 }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total crude payment:", error.message);
    return NextResponse.json({ error: "Error fetching total crude payment" }, { status: 500 });
  }
}

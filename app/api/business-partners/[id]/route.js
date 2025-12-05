// Disable Vercel caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

import connectMongoDB from "../../../libs/mongodb";
import BusinessPartner from "../../../models/BusinessPartner";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Partner ID is required" }, { status: 400 });
  }

  try {
    await connectMongoDB();

    const partner = await BusinessPartner.findById(id);

    if (!partner) {
      return NextResponse.json({ error: "Business Partner not found" }, { status: 404 });
    }

    return NextResponse.json(partner, { status: 200 });
  } catch (error) {
    console.error("Error fetching partner:", error.message);
    return NextResponse.json({ error: "Error fetching partner" }, { status: 500 });
  }
}

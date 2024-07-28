// src/app/api/productionRecords/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import ProductionRecord from "../../../models/ProductionRecord";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await ProductionRecord.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Production record not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching production record:", error.message);
    return NextResponse.json({ error: "Error fetching production record" }, { status: 500 });
  }
}

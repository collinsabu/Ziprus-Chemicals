// src/app/api/despatchRecords/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import DespatchRecord from "../../../models/DespatchRecord";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await DespatchRecord.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Despatch record not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching despatch record:", error.message);
    return NextResponse.json({ error: "Error fetching despatch record" }, { status: 500 });
  }
}

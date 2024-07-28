// src/app/api/crudeentries/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import CrudeEntry from "../../../models/CrudeEntry";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await CrudeEntry.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Crude entry not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching crude entry:", error.message);
    return NextResponse.json({ error: "Error fetching crude entry" }, { status: 500 });
  }
}

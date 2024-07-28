// src/app/api/bagAccountEntries/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import BagAccountEntry from "../../../models/BagAccountEntry";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await BagAccountEntry.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Bag account entry not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bag account entry:", error.message);
    return NextResponse.json({ error: "Error fetching bag account entry" }, { status: 500 });
  }
}

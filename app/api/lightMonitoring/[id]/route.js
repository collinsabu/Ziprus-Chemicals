// src/app/api/lightMonitoring/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import LightMonitoring from "../../../models/LightMonitoring";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const { id } = params;
    const entry = await LightMonitoring.findById(id);
    if (!entry) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching light monitoring entry:", error.message);
    return NextResponse.json({ error: "Error fetching light monitoring entry" }, { status: 500 });
  }
}

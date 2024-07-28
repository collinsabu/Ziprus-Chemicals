// src/app/api/customerLoading/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import CustomerLoading from "../../../models/CustomerLoading";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await CustomerLoading.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer loading:", error.message);
    return NextResponse.json({ error: "Error fetching customer loading" }, { status: 500 });
  }
}

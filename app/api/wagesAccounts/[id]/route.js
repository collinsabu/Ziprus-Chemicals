// src/app/api/wagesAccounts/[id]/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import WagesAccount from "../../../models/WagesAccount";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const entry = await WagesAccount.findById(id);

    if (!entry) {
      return NextResponse.json({ error: "Wages account record not found" }, { status: 404 });
    }

    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    console.error("Error fetching wages account record:", error.message);
    return NextResponse.json({ error: "Error fetching wages account record" }, { status: 500 });
  }
}
 
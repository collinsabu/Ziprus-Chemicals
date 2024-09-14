// src/app/api/productionRecords/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import ProductionRecord from "../../models/ProductionRecord";

export async function POST(request) {
  try {
    await connectMongoDB();

    const {
      date,
      time,
      workerId, // Replaced customerId with workerId
      materialType,
      totalProduce,
      amountPerBag,
      totalProductionAmount,
      comment,
    } = await request.json();

    const newProductionRecord = new ProductionRecord({
      date,
      time,
      workerId, // Changed from customerId to workerId
      materialType,
      totalProduce,
      amountPerBag,
      totalProductionAmount,
      comment,
    });

    await newProductionRecord.save();

    return NextResponse.json(
      { message: "Production record created successfully", data: newProductionRecord },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating production record:", error.message);
    return NextResponse.json({ error: "Error creating production record" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const entries = await ProductionRecord.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`),
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching production records:", error.message);
    return NextResponse.json({ error: "Error fetching production records" }, { status: 500 });
  }
}

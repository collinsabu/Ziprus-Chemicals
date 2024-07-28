// src/app/api/customerLoading/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import CustomerLoading from "../../models/CustomerLoading";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, vehicleNumber, customerUniqueID, materialType, tonnage, priceByTonnage, location, summaryNote } = await request.json();

    const newCustomerLoading = new CustomerLoading({
      date,
      time,
      vehicleNumber,
      customerUniqueID,
      materialType,
      tonnage,
      priceByTonnage,
      location,
      summaryNote,
    });

    await newCustomerLoading.save();

    return NextResponse.json({ message: "Customer loading created successfully", data: newCustomerLoading }, { status: 201 });
  } catch (error) {
    console.error("Error creating customer loading:", error.message);
    return NextResponse.json({ error: "Error creating customer loading" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();

    const entries = await CustomerLoading.find();

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer loading:", error.message);
    return NextResponse.json({ error: "Error fetching customer loading" }, { status: 500 });
  }
}

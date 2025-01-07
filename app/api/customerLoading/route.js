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

    const { searchParams } = new URL(request.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    if (!month || !year) {
      return NextResponse.json({ error: "Invalid month or year" }, { status: 400 });
    }

    // Adjusting query to use regex for the `YYYY-MM` format in MongoDB
    const entries = await CustomerLoading.find({
      date: {
        $regex: new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`), // Match date format `YYYY-MM`
      },
    });

    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching customer loading entries:", error.message);
    return NextResponse.json({ error: "Error fetching customer loading entries" }, { status: 500 });
  }
}
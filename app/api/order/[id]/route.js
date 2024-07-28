// pages/api/order/[id].js

import connectMongoDB from "../../../libs/mongodb"; // Adjust the path according to your project structure
import Order from "../../../models/Order";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
  }

  try {
    await connectMongoDB();

    const order = await Order.findById(id);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error.message);
    return NextResponse.json({ error: "Error fetching order" }, { status: 500 });
  }
}

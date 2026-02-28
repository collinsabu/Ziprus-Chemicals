// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

import connectMongoDB from "../../libs/mongodb";
import Order from "../../models/Order";
import { NextResponse } from "next/server";

// ======================
// CREATE ORDER
// ======================
export async function POST(request) {
  try {
    const { name, company, email, supply, number, material, body } =
      await request.json();

    if (
      !name ||
      !company ||
      !email ||
      !supply ||
      !number ||
      !material ||
      !body
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await connectMongoDB();

    const order = await Order.create({
      name,
      company,
      email,
      supply,
      number,
      material,
      body,
    });

    return NextResponse.json(
      { message: "Order Created", order },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating order:", error.message);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 },
    );
  }
}

// ======================
// GET ORDERS (Newest First)
// ======================
export async function GET() {
  try {
    await connectMongoDB();

    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .exec();

    // ✅ ADD THE LOG RIGHT HERE
    console.log(
      orders.map(o => ({
        id: o._id,
        createdAt: o.createdAt
      }))
    );

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Error fetching orders" },
      { status: 500 }
    );
  }
}

// ======================
// DELETE ORDER
// ======================
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const result = await Order.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Order deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting order:", error.message);
    return NextResponse.json(
      { error: "Error deleting order" },
      { status: 500 },
    );
  }
}

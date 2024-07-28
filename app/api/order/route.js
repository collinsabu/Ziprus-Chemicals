// pages/api/order.js
import connectMongoDB from "../../libs/mongodb"; // Ensure you have this utility to connect to MongoDB
import Order from "../../models/Order"; // Ensure the Order model/schema is correctly imported
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Extract data from the request body
    const { name, company, email, supply, number, material, body } = await request.json();

    // Check if all required fields are provided
    if (!name || !company || !email || !supply || !number || !material || !body) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new order document using the Order model/schema
    const order = new Order({
      name,
      company,
      email,
      supply,
      number,
      material,
      body,
    });

    // Save the order to the database
    await order.save();

    // Return a success response
    return NextResponse.json({ message: "Order Created", order }, { status: 201 });
  } catch (error) {
    // Handle errors
    console.error("Error creating order:", error.message);
    return NextResponse.json({ error: "Error creating order" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const orders = await Order.find({});

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    return NextResponse.error({ message: error.message });
  }
}

export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const result = await Order.findByIdAndDelete(id);

    if (!result) {
      console.log(`Order not found with ID: ${id}`);
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    console.log(`Order deleted with ID: ${id}`);
    return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// app/api/assets/route.js
import connectMongoDB from "../../libs/mongodb";
import Asset from "../../models/Asset";
import { NextResponse } from "next/server";

/* =====================
   CREATE NEW ASSET (POST)
   ===================== */
export async function POST(request) {
  try {
    const {
      name,
      category,
      purchaseDate,
      purchaseCost,
      supplier,
      condition,
      status,
      assignedTo,
      location,
      serialNumber,
      description,
    } = await request.json();

    if (!name || !category || !purchaseDate || !purchaseCost) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectMongoDB();

    const asset = new Asset({
      name,
      category,
      purchaseDate,
      purchaseCost,
      supplier,
      condition,
      status,
      assignedTo,
      location,
      serialNumber,
      description,
    });

    await asset.save();

    return NextResponse.json({ message: "Asset recorded successfully", asset }, { status: 201 });
  } catch (error) {
    console.error("Error creating asset:", error);
    return NextResponse.json({ error: "Error creating asset" }, { status: 500 });
  }
}

/* =====================
   FETCH ALL ASSETS (GET)
   ===================== */
export async function GET() {
  try {
    await connectMongoDB();
    const assets = await Asset.find({}).sort({ createdAt: -1 });
    return NextResponse.json(assets, { status: 200 });
  } catch (error) {
    console.error("Error fetching assets:", error);
    return NextResponse.json({ error: "Error fetching assets" }, { status: 500 });
  }
}

/* =====================
   UPDATE AN ASSET (PUT)
   ===================== */
export async function PUT(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Asset ID is required" }, { status: 400 });
    }

    const updates = await request.json();

    await connectMongoDB();

    const updatedAsset = await Asset.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedAsset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Asset updated successfully", asset: updatedAsset }, { status: 200 });
  } catch (error) {
    console.error("Error updating asset:", error);
    return NextResponse.json({ error: "Error updating asset" }, { status: 500 });
  }
}

/* =====================
   DELETE AN ASSET (DELETE)
   ===================== */
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const result = await Asset.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Asset deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting asset:", error);
    return NextResponse.json({ error: "Error deleting asset" }, { status: 500 });
  }
}

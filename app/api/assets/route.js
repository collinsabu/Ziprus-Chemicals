import connectMongoDB from "../../libs/mongodb";
import Asset from "../../models/Asset";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

/* ======================
   CLOUDINARY CONFIG
====================== */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ======================
   CREATE NEW ASSET (POST)
====================== */
export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const category = formData.get("category");
    const purchaseDate = formData.get("purchaseDate");
    const purchaseCost = formData.get("purchaseCost");
    const supplier = formData.get("supplier");
    const condition = formData.get("condition");
    const status = formData.get("status");
    const assignedTo = formData.get("assignedTo");
    const location = formData.get("location");
    const serialNumber = formData.get("serialNumber");
    const description = formData.get("description");

    const imageFile = formData.get("image");

    if (!name || !category || !purchaseDate || !purchaseCost) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    let imageUrl = "";

    /* ======================
       UPLOAD IMAGE TO CLOUDINARY
    ====================== */
    if (imageFile && typeof imageFile === "object") {
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "assets" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

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
      image: imageUrl,
    });

    await asset.save();

    return NextResponse.json(
      { message: "Asset recorded successfully", asset },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating asset:", error);
    return NextResponse.json(
      { error: "Error creating asset" },
      { status: 500 }
    );
  }
}

/* ======================
   FETCH ALL ASSETS
====================== */
export async function GET() {
  try {
    await connectMongoDB();
    const assets = await Asset.find({}).sort({ createdAt: -1 });
    return NextResponse.json(assets, { status: 200 });
  } catch (error) {
    console.error("Error fetching assets:", error);
    return NextResponse.json(
      { error: "Error fetching assets" },
      { status: 500 }
    );
  }
}

/* ======================
   UPDATE ASSET
====================== */
export async function PUT(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Asset ID is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const updates = await request.json();

    const updatedAsset = await Asset.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedAsset) {
      return NextResponse.json(
        { error: "Asset not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Asset updated successfully", asset: updatedAsset },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating asset:", error);
    return NextResponse.json(
      { error: "Error updating asset" },
      { status: 500 }
    );
  }
}

/* ======================
   DELETE ASSET
====================== */
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const result = await Asset.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json(
        { error: "Asset not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Asset deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting asset:", error);
    return NextResponse.json(
      { error: "Error deleting asset" },
      { status: 500 }
    );
  }
}
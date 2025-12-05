// Disable Vercel caching completely
export const dynamic = "force-dynamic";
export const revalidate = 0;

// app/api/business-partners/route.js
import connectMongoDB from "../../libs/mongodb";
import BusinessPartner from "../../models/BusinessPartner";

// ==========================
// CREATE NEW BUSINESS PARTNER
// ==========================
export async function POST(req) {
  try {
    await connectMongoDB();

    const body = await req.json();
    const { name, phoneNumber, category, description } = body;

    if (!name || !phoneNumber || !category) {
      return new Response(JSON.stringify({ message: "Required fields missing." }), {
        status: 400,
      });
    }

    const newPartner = new BusinessPartner({
      name,
      phoneNumber,
      category,     // Free text category
      description,
    });

    await newPartner.save();

    return new Response(JSON.stringify(newPartner), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error creating partner:", error);
    return new Response(JSON.stringify({ message: "Failed to add business partner." }), {
      status: 500,
    });
  }
}

// ==========================
// GET ALL BUSINESS PARTNERS
// ==========================
export async function GET(req) {
  try {
    await connectMongoDB();

    const partners = await BusinessPartner.find({}).sort({ createdAt: -1 });

    return new Response(JSON.stringify(partners), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching business partners:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch data." }), {
      status: 500,
    });
  }
}

// ==========================
// DELETE BUSINESS PARTNER
// ==========================
export async function DELETE(req) {
  try {
    await connectMongoDB();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required." }), {
        status: 400,
      });
    }

    await BusinessPartner.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ message: "Business partner deleted successfully." }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ message: "Failed to delete data." }), {
      status: 500,
    });
  }
}

// ==========================
// UPDATE BUSINESS PARTNER
// ==========================
export async function PATCH(req) {
  try {
    await connectMongoDB();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const updates = await req.json();

    if (!id || !updates) {
      return new Response(JSON.stringify({ message: "ID and updates required." }), {
        status: 400,
      });
    }

    const updatedPartner = await BusinessPartner.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    if (!updatedPartner) {
      return new Response(JSON.stringify({ message: "No data found with given ID." }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedPartner), { status: 200 });

  } catch (error) {
    console.error("Update error:", error);
    return new Response(JSON.stringify({ message: "Failed to update data." }), {
      status: 500,
    });
  }
}

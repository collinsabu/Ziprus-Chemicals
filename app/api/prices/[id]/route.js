import connectDB from "../../../libs/mongodb";
import Price from "../../../models/Price";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const data = await req.json();

    const pricePerTon =
      Number(data.materialCost) +
      Number(data.transportCost) +
      Number(data.loadingCost) +
      Number(data.profit);

    const updated = await Price.findByIdAndUpdate(
      params.id,
      { ...data, pricePerTon },
      { new: true }
    );

    return Response.json(updated);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const deleted = await Price.findByIdAndDelete(params.id);

    if (!deleted) {
      return Response.json(
        { error: "Price not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

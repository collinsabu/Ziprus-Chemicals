import connectDB from "../../libs/mongodb";
import Price from "../../models/Price";

export async function GET() {
  await connectDB();
  const prices = await Price.find().sort({ createdAt: -1 });
  return Response.json(prices);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const pricePerTon =
    Number(data.materialCost) +
    Number(data.transportCost) +
    Number(data.loadingCost) +
    Number(data.profit);

  const price = await Price.create({
    ...data,
    pricePerTon,
  });

  return Response.json(price);
}

// 3. Expense APIs (app/api/expenses/route.js)
import connectMongoDB from "../../libs/mongodb";
import Expense from "../../models/Expense";

export async function GET(req) {
  try {
    await connectMongoDB();
    const { searchParams } = new URL(req.url);
    const month = parseInt(searchParams.get("month"), 10);
    const year = parseInt(searchParams.get("year"), 10);

    const regexDate = new RegExp(`^${year}-${month < 10 ? `0${month}` : month}`);

    const expenses = await Expense.find({ date: { $regex: regexDate } });
    return new Response(JSON.stringify(expenses), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching expenses" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const newExpense = await Expense.create(data);
    return new Response(JSON.stringify(newExpense), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating expense" }), { status: 500 });
  }
}
// 4. Dynamic Expense APIs (app/api/expenses/[id]/route.js)
import connectMongoDB from "../../../libs/mongodb";
import Expense from "../../../models/Expense";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const expense = await Expense.findById(id);
    if (!expense) {
      return new Response(JSON.stringify({ error: "Expense not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(expense), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching expense" }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const updatedExpense = await Expense.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return new Response(JSON.stringify(updatedExpense), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error updating expense" }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongoDB();
    await Expense.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting expense" }), { status: 500 });
  }
}
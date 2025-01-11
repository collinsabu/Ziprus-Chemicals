import connectMongoDB from "../../../libs/mongodb";
import Expense from "../../../models/Expense";

export async function GET(req) {
  try {
    await connectMongoDB();

    // Aggregate total expenses
    const total = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }, // Sum all 'amount' fields
        },
      },
    ]);

    return new Response(
      JSON.stringify({ total: total[0]?.total || 0 }), // Return total amount or 0 if no expenses
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error calculating total expenses" }),
      { status: 500 }
    );
  }
}

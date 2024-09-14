// src/app/api/workerPaidWagesTotal/route.js

import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import WagesAccount from '../../models/WagesAccount';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const workerId = searchParams.get('workerId'); // Retrieve the workerId from the query parameters

  console.log(`Received request for workerId: ${workerId}`);

  try {
    // Connect to MongoDB
    await connectMongoDB();
    console.log('Connected to MongoDB');

    // Aggregate the total "paid" amount for the worker
    const totalPaid = await WagesAccount.aggregate([
      { $match: { workerId } }, // Match records where workerName is equal to workerId
      {
        $group: {
          _id: null,
          total: { $sum: "$paid" } // Sum the "paid" field for the matched records
        }
      }
    ]);

    console.log('Total paid wages calculated:', totalPaid);

    // Return the total or 0 if no results are found
    return NextResponse.json({ total: totalPaid[0]?.total || 0 });
  } catch (error) {
    console.error('Error fetching total paid wages:', error.message);
    return NextResponse.json({ error: 'Error fetching total paid wages' }, { status: 500 });
  }
}

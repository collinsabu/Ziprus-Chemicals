// src/app/api/workerProductionTotal/route.js

import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import ProductionRecord from '../../models/ProductionRecord'; // Ensure you have this model

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const workerId = searchParams.get('workerId');

  try {
    await connectMongoDB();

    const totalProductionAmount = await ProductionRecord.aggregate([
      { $match: { workerId } },
      {
        $group: {
          _id: null,
          total: { $sum: "$totalProductionAmount" }
        }
      }
    ]);

    return NextResponse.json({ total: totalProductionAmount[0]?.total || 0 });
  } catch (error) {
    console.error('Error fetching total production amount:', error.message);
    return NextResponse.json({ error: 'Error fetching total production amount' }, { status: 500 });
  }
}

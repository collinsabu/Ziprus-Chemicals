// src/app/api/customerLoadingTotal/route.js

import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import CustomerLoading from '../../models/CustomerLoading';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const customerUniqueID = searchParams.get('customerUniqueID');

  console.log(`Received request for customerUniqueID: ${customerUniqueID}`);

  try {
    await connectMongoDB();
    console.log('Connected to MongoDB');

    const matchedRecords = await CustomerLoading.find({ customerUniqueID });
    console.log('Matched records:', matchedRecords);

    const totalLoading = await CustomerLoading.aggregate([
      { $match: { customerUniqueID } },
      {
        $group: {
          _id: null,
          total: {
            $sum: {
              $multiply: ['$tonnage', '$priceByTonnage']
            }
          }
        }
      }
    ]);

    console.log('Total loading calculated:', totalLoading);

    return NextResponse.json({ total: totalLoading[0]?.total || 0 });
  } catch (error) {
    console.error('Error fetching customer loading total:', error.message);
    return NextResponse.json({ error: 'Error fetching customer loading total' }, { status: 500 });
  }
}

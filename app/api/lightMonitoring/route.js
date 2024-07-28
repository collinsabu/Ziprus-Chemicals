// src/app/api/lightMonitoring/route.js

import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import LightMonitoring from '../../models/LightMonitoring';

export async function POST(request) {
  try {
    await connectMongoDB();

    const { date, time, numberOfBags, light, summaryNote } = await request.json();

    const newLightMonitoring = new LightMonitoring({
      date,
      time,
      numberOfBags,
      light,
      summaryNote,
    });

    await newLightMonitoring.save();

    return NextResponse.json({ message: 'Light monitoring entry created successfully', data: newLightMonitoring }, { status: 201 });
  } catch (error) {
    console.error('Error creating light monitoring entry:', error.message);
    return NextResponse.json({ error: 'Error creating light monitoring entry' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const entries = await LightMonitoring.find();
    return NextResponse.json({ entries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching light monitoring entries:', error.message);
    return NextResponse.json({ error: 'Error fetching light monitoring entries' }, { status: 500 });
  }
}

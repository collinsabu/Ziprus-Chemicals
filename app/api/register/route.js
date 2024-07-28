import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '../../libs/mongodb';
import User from '../../models/User';

export async function POST(request) {
  await dbConnect();
  
  const { email, password, role } = await request.json();

  if (!email || !password || !role) {
    return NextResponse.json({ message: 'Email, password, and role are required' }, { status: 400 });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      role,
    });

    await user.save();
    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error registering user' }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Handle session or token creation here

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error.message);
    return NextResponse.json({ error: "Error logging in" }, { status: 500 });
  }
}

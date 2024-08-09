import { NextResponse } from "next/server";
import { connDb } from "../../../../dbconn/route";

export async function GET(req) {
  try {
    await connDb();

    return NextResponse.json({ message: "DB connected successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error connecting to DB" },
      { status: 500 }
    );
  }
}

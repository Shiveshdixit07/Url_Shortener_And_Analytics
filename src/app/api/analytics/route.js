import { NextResponse } from "next/server";
import Url from "../../../../models/postModel";
import connectDB from "../../../../config/database";

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.formData();
    const url = data.get("url");

    if (!url || url.trim() === "") {
      return NextResponse.json({
        error: "URL cannot be empty",
      }, { status: 400 });
    }

    const result = await Url.findOne({ targetUrl: url });
    
    if (!result) {
      return NextResponse.json({
        error: "URL is not yet generated through URL Shortener",
      }, { status: 404 });
    }

    const history = result.history.map(v => new Date(v.timeStamp).toISOString());

    const response = {
      Generated_On: result.createdAt.toISOString(),
      Last_Visited_On: result.updatedAt.toISOString(),
      Number_Of_Visits: result.history.length,
      History_Of_Visits: history,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Analytics API Error:", error);
    return NextResponse.json({
      error: error.message || "Internal server error",
    }, { status: 500 });
  }
} 
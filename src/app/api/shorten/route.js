import { NextResponse } from "next/server";
import shortid from "shortid";
import Url from "../../../../models/postModel";
import { headers } from "next/headers";
import connectDB from "../../../../config/database";

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectDB();
    const url = request.nextUrl.searchParams.get('url');

    if (!url || url.trim() === "") {
      return NextResponse.json({
        error: "URL cannot be empty",
      }, { status: 400 });
    }

    // Check if URL already exists
    const existingUrl = await Url.findOne({ targetUrl: url });
    if (existingUrl) {
      const headersList = headers();
      const host = headersList.get("host");
      const shortUrl = `${host}/${existingUrl.id}`;
      
      return NextResponse.json({ 
        shortUrl,
        originalUrl: url,
        message: "URL already shortened"
      });
    }

    // Generate new short URL
    const shortUrl = shortid();
    await Url.create({
      id: shortUrl,
      targetUrl: url,
      history: [],
    });

    const headersList = headers();
    const host = headersList.get("host");
    const result = `${host}/${shortUrl}`;
    
    return NextResponse.json({ 
      shortUrl: result,
      originalUrl: url,
      message: "URL shortened successfully"
    });
  } catch (error) {
    console.error("Shorten API Error:", error);
    return NextResponse.json({
      error: "Internal server error",
    }, { status: 500 });
  }
}

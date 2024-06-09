import { NextResponse } from "next/server";
import shortid from "shortid";
import Url from "../../../models/postModel";
import { headers } from "next/headers";
export async function POST(request) {
  const shortUrl = shortid();
  const data = await request.formData();
  if (data.get("url") == "")
    return NextResponse.json({
      error: "Url can not be empty",
    });

  await Url.create({
    id: shortUrl,
    targetUrl: data.get("url"),
    history: [],
  });

  const headersList = headers();

  const h = headersList.get("host");
  const result = h + "/" + shortUrl;
  return NextResponse.json({ shortUrl: result });
}

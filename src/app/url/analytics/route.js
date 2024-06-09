import { NextResponse } from "next/server";
import Url from "../../../../models/postModel";
export async function POST(request) {
  const data = await request.formData();

  if (data.get("url") == "")
    return NextResponse.json({
      error: "Url can not be empty",
    });
  const result = await Url.findOne({ targetUrl: data.get("url") });
  if (!result) {
    return NextResponse.json({
      error: "Url is not yet generated through Url Shortener",
    });
  }
  let h = [];
  result.history.map((v) => {
    h.push(new Date(v.timeStamp).toLocaleString());
  });
  return NextResponse.json({
    Generated_On: result.createdAt.toLocaleString(),
    Last_Visited_On: result.updatedAt.toLocaleString(),
    Number_Of_Visits: result.history.length,
    History_Of_Visits: h,
  });
}

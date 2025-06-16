import { redirect } from "next/navigation";
import URL from "../../../models/postModel";
import connectDB from "../../../config/database";

export default async function TargetUrl({ params, searchParams }) {
  await connectDB();
  const result = await URL.findOneAndUpdate(
    { id: `${params.id}` },
    {
      $push: {
        history: { timeStamp: Date.now() },
      },
    }
  );
  if (result) {
    return redirect(result.targetUrl);
  }
}

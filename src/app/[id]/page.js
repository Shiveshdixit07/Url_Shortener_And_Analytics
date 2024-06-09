import { redirect } from "next/navigation";
import URL from "../../../models/postModel";

export default async function TargetUrl({ params, searchParams }) {
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

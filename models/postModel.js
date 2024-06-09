import { models, Schema, model } from "mongoose";

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    targetUrl: {
      type: String,
      required: true,
    },
    history: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = models.url || model("url", schema);

export default URL;

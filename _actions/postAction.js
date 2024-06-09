"use server";
import URL from "../models/postModel";
import connectDB from "../config/database";

export async function getPosts() {
  try {
    await connectDB();
    return { msg: "connected to mongodb!!" };
  } catch (error) {
    return { msg: error.message };
  }
}

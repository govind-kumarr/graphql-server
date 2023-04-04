import mongoose from "mongoose";
import { config } from "dotenv";

config();
export const makeConnection = async (cb) => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("connection established to database".cyan.underline.bold);
    cb();
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://umerjusani04:umer123@cluster0.c9fao2a.mongodb.net/chaibackend"
    );
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection Error");
  }
};

export default connectDB;

import mongoose from "mongoose";

const MONGODB_URI = process.env['MONGODB_URI']
export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("MongoAtlas Conectado");
  } catch (error) {
    console.error(error);
  }
};
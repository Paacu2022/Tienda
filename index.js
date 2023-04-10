import express from "express";
const app = express();
const PORT = process.env["PORT"] || 3000;
import { connectToDB } from "./config/mongoose.js";


  connectToDB();
  app.listen(PORT);
  console.log("Servidor corriendo en puerto:", PORT);






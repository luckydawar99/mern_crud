import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = 5000;
const URL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use("/api", route);

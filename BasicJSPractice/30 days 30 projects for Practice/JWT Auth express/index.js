import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
// import { connectDb } from "./db/connectDB.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests :req.body

app.get("/api/v1/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);

app.listen(port, () => {
  // connectDb(process.env.MONGO_URI);
  console.log(`Server is running on port ${port}`);
});

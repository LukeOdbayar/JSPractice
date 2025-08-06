import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests :req.body

app.get("/api/v1/", (request, response) => {
  response.send("Hello World!");
});

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

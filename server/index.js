import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import apparelRoutes from "./routes/apparel.js";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
dotenv.config();

//Route Paths
app.use("/apparel", apparelRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => app.listen(PORT, () => console.log(`Mongo connection is established and running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

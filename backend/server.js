import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/api/productRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
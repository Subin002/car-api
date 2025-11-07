const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

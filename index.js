const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db.js");

const authRoutes = require("./routes/authRoutes.js");

const port = process.env.port || 5000;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // very important!!

// Connect DB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running....");
});

// Routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(port, () => console.log(`http://localhost:${port}`));

const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1:27017/data"; 
async function db() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

module.exports = db;

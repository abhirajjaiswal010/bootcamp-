const express = require("express");
const db = require("./db.js");
const dotenv = require("dotenv");
dotenv.config();
db();
const app = express();
//middleware
app.use(express.json());

const port = process.env.port || 3001;

app.get("/", (req, res) => {
  res.send("hi i am server");
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

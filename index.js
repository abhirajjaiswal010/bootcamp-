import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const port = process.env.port || 5000;
const app = express();
app.use(cors());
connectDB();
app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use(express.json()); // important!!

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`http://localhost:${port}`));

// import express from "express";

// const app = express();
// const PORT = 4000;

// // Middleware to read JSON body
// app.use(express.json());

// // Dummy data
// let users = [
//   { id: 1, name: "Abhi" ,age:"20"},
//   { id: 2, name: "Rohit" }
// ];

// // ------------------- GET -------------------
// app.get("/users", (req, res) => {
//   res.json(users);
// });

// // ------------------- POST -------------------
// // app.post("/users", (req, res) => {
// //   const { name } = req.body;

// //   const newUser = {
// //     id: users.length + 1,
// //     name
// //   };

// //   users.push(newUser);

// //   res.status(201).json({ message: "User created", user: newUser });
// // });

// // ------------------- PUT -------------------
// // (PUT = overwrite full object)
// // app.put("/users/:id", (req, res) => {
// //   const userId = parseInt(req.params.id);
// //   const { name } = req.body;

// //   users = users.map((user) =>
// //     user.id === userId ? { id: userId, name } : user
// //   );

// //   res.json({ message: "User overwritten", users });
// // });

// // ------------------- PATCH -------------------
// // (PATCH = update only specific fields)
// app.patch("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const { name } = req.body;

//   users = users.map((user) =>
//     user.id === userId ? { ...user, name } : user
//   );

//   res.json({ message: "User updated", users });
// });

// // ------------------- DELETE -------------------
// app.delete("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id);

//   users = users.filter((user) => user.id !== userId);

//   res.json({ message: "User deleted", users });
// });

// // ------------------- SERVER -------------------
// app.listen(PORT, () => {
//   console.log(`Server running on PORT http://localhost:${PORT}`);
// });

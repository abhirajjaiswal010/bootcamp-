const express = require("express");
const { signup, login } = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// token verify endpoint

module.exports = router;

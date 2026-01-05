const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
console.log("Auth routes file loaded");

module.exports = router;
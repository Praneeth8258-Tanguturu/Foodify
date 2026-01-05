const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const { addFood, getMenu, updateFood, deleteFood } = require("../controllers/menuController");

// public
router.get("/", getMenu);

// Admin
router.post("/", protect, isAdmin, addFood);
router.put("/:id", protect, isAdmin, updateFood);
router.delete("/:id", protect, isAdmin, deleteFood);

console.log("Menu routes loaded");

module.exports = router;
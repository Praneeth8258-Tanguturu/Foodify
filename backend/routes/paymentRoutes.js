const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { mockPayment } = require("../controllers/paymentController");

router.post("/mock", protect, mockPayment);

module.exports = router;

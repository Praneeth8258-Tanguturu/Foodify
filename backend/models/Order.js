const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Menu"
            },
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    totalAmount: { type: Number, enum: ["Pending", "Preparing", "Delivered", "Cancelled"], default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
const Order = require("../models/Order");

// Mock Payment Success
exports.mockPayment = async (req, res) => {
    const { orderId } = req.body;

    try {
        const order = await Order.findById(orderId);

        if(!order) { return res.status(404).json({ message: "Order not found "}); }

        order.paymentStatus = "Paid";
        order.paymentId = "Mock_Payment_123";

        await order.save();
        res.json({ message: "Payment Successful (Mock)", order});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};
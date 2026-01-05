const Order = require("../models/Order");
const Cart = require("../models/Cart");

// PLACE ORDER
exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.food");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;
    const orderItems = cart.items.map((item) => {
      total += item.price * item.quantity;
      return {
        food: item.food._id,
        name: item.food.name,
        price: item.price,
        quantity: item.quantity
      };
    });

    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      totalAmount: total
    });

    // clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER ORDERS
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

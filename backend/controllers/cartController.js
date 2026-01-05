const Cart = require("../models/Cart");
const Menu = require("../models/Menu");

// Add to cart
exports.addToCart = async (req, res) => {
    const { foodId, quantity } = req.body;

    try {
        const food = await Menu.findById(foodId);
        if(!food) { res.status(404).json({ message: "Food not found" }); }

        let cart = await Cart.findOne({ user: req.user._id });
        if(!cart) {
            cart = await Cart.create({
                user: req.user._id,
                items: [
                    {
                        food: foodId, quantity, price: food.price
                    }
                ]
            });
        }
        else {
            // if item already exists in the cart
            const itemIndex = cart.items.findIndex(
                (item) => item.food.toString() === foodId
            );

            if(itemIndex > -1) { cart.items[itemIndex].quantity += quantity; }
            else {
                cart.items.push({ food: foodId, quantity, price: food.price });
            }
            await cart.save();
        }
        res.json(cart);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};


// Get user cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate(
            "items.food", "name price image"
        );
        res.json(cart);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

// remove item from cart
exports.removeFromCart = async (req, res) => {
    const foodId = req.params.foodId;

    try {
        const cart = await Cart.findOne({ user: req.user._id });
        cart.items = cart.items.filter(
            (item) => item.food.toString() !== foodId
        );

        await cart.save();
        res.json(cart);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};
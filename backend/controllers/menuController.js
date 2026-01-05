const Menu = require("../models/Menu");

// Add food (admin)
exports.addFood = async (req, res) => {
    try {
        const food = await Menu.create(req.body);
        res.status(201).json(food);
    }
    catch(error) {
        res.status(500).json({ message: error.message});
    }
};

// Get all food (public)
exports.getMenu = async (req, res) => {
    try {
        const menu = await Menu.find({ isAvailable: true });
        res.json(menu);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

// Update food
exports.updateFood = async (req, res) => {
    try {
        const updated = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

// delete food (admin)
exports.deleteFood = async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.json({ message: "Food item removed"});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};
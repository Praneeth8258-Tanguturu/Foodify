const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
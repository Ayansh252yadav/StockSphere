require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const mongoose = require("mongoose");
const User = require("./model/UserModel");
const { verifyUser } = require("./middleWare/AuthMiddleware");

// ================== MIDDLEWARE ==================
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRoute);
// ================== DB CONNECTION ==================
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB connection error:", err));

// ================== MODELS ==================
const { PositionModel } = require("./model/PositionModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const OrderModel = require("./model/OrderModel");



//  Get all holdings 
app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  Get all positions
app.get("/allPosition", async (req, res) => {
    try {
        const allPositions = await PositionModel.find({});
        res.json(allPositions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new order (BUY / SELL)
app.post("/newOrder", async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        const newOrder = await OrderModel.create({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });

        let holding = await HoldingsModel.findOne({ name });
        if (mode === "Buy") {
            if (holding) {
                const totalQty = holding.qty + qty;
                holding.avg = ((holding.avg * holding.qty) + (price * qty)) / totalQty;
                holding.qty = totalQty;
                holding.price = price;
                const netValue = (price - holding.avg) * holding.qty;
                holding.net =
                    (netValue >= 0 ? "+" : "") + netValue.toFixed(2);
                holding.day =
                    (((price - holding.avg) / holding.avg) * 100).toFixed(2) + "%";
                await holding.save();
            } else {
                holding = new HoldingsModel({
                    name,
                    qty,
                    avg: price,
                    price,
                    net: "+0.00",
                    day: "0.00%",
                });
                await holding.save();
            }

        }
        else if (mode === "Sell") {
            if (!holding) {
                return res.status(400).json({ message: "No holdings found" });
            }
            holding.qty = holding.qty - qty;
            if (holding.qty <= 0) {
                await HoldingsModel.deleteOne({ name });
            } else {
                holding.price = price;
                const netValue = (price - holding.avg) * holding.qty;
                holding.net = (netValue >= 0 ? "+" : "") + netValue.toFixed(2);
                holding.day = (((price - holding.avg) / holding.avg) * 100).toFixed(2) + "%";
                await holding.save();
            }
        }
        res.status(201).json(newOrder);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Compute HOLDINGS from orders
app.get("/holdings", async (req, res) => {
    try {
        const orders = await OrderModel.find({});

        const map = {};

        orders.forEach(order => {
            if (!map[ order.name ]) {
                map[ order.name ] = 0;
            }

            if (order.mode === "Buy") {
                map[ order.name ] += order.qty;
            } else if (order.mode === "Sell") {
                map[ order.name ] -= order.qty;
            }
        });

        const holdings = Object.keys(map)
            .map(name => ({
                name,
                qty: map[ name ]
            }))
            .filter(h => h.qty > 0);

        res.json(holdings);
        //  console.log(holdings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/allOrders", async (req,res)=>{
  const allOrders= await OrderModel.find({})
  res.json(allOrders);
})



app.get("/me", verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.json({
      success: true,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ================== START SERVER ==================
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
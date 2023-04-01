const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  ecommerce_name: { type: String, required: true },
  no_of_clicks: { type: Number, required: true, default: 1 },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);
const Product = new mongoose.model("Product", productSchema);

module.exports = { Product, User };

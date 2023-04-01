const express = require("express");
const router = express.Router();

// Custom Imports
const register = require("../controllers/registerController");

const login = require("../controllers/loginController");

const getAllProduct = require("../controllers/allProductController");

const {
  getEcom1Product,
  postEcom1Product,
} = require("../controllers/ecom1Controller");
const {
  getEcom2Product,
  postEcom2Product,
} = require("../controllers/ecom2Controller");
const {
  getEcom3Product,
  postEcom3Product,
} = require("../controllers/ecom3Controller");

// login route

router.post("/login", login);

//register

router.post("/register", register);
// All Products

router.get("/", getAllProduct);

// Ecommerce-1

router.get("/ecom1/", getEcom1Product);
router.post("/ecom1/", postEcom1Product);

// Ecommerce-2

router.get("/ecom2/", getEcom2Product);
router.post("/ecom2/", postEcom2Product);

// Ecommerce-3

router.get("/ecom3/", getEcom3Product);
router.post("/ecom3/", postEcom3Product);

module.exports = router;

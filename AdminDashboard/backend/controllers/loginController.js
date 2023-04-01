const User = require("../models/productClickModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  const checkemail = await User.findOne({ email });

  if (checkemail) {
    if (password === checkemail.password) {
      res.status(200).send({ message: "Login Successfull" });
    } else {
      res.status(400).send({ message: "Invalid Credentials" });
    }
  } else {
    res
      .status(401)
      .send({ message: "email Id is not registered. Please Register" });
  }
};

module.exports = login;

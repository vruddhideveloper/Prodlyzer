const User = require("../models/productClickModel");

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: "Please fill all fields" });
  }

  const checkUser = await User.findOne({ email });

  console.log(checkUser);

  if (checkUser) {
    res.status(400).send({ message: "User already exists" });
  } else {
    await User.create({ name, email, password })
      .then(res.status(201))
      .send({ message: "User Registered Successfully " })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = register;

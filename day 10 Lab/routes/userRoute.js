const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userDB");
const bcrypt = require("bcrypt");
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "mmmmmmmmmmmmmmmmm"; // 17 m

// JWT Create Helper - generate JWT
function jwtcreate(req, res, next) {
  const user = req.user;
  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  req.token = token;
  next();
}

// Register Route - user regestration
router.post(
  "/register",
  async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({ error: "User already exists" });

      const hashpassword = await bcrypt.hash(password, 10);
      const newuser = new User({ username, email, password: hashpassword });
      await newuser.save();
      req.user = newuser;
      next();
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something went wrong during registration." });
    }
  },
  jwtcreate,
  (req, res) => {
    res.status(201).json({ message: "User created", token: req.token });
  }
);

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authenticateRequest = require("../middleware/auth");

const router = express.Router();

function getJwtSecret() {
  return process.env.JWT_SECRET || "development_only_change_me";
}

function createToken(user) {
  return jwt.sign(
    { sub: user._id.toString() },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

function toPublicUser(user) {
  return {
    id: user._id,
    email: user.email,
    profile: user.profile || {}
  };
}

router.post("/signup", async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must contain at least 8 characters"
      });
    }

    if (await User.findOne({ email })) {
      return res.status(409).json({
        message: "An account with this email already exists"
      });
    }

    const user = await User.create({
      email,
      passwordHash: await bcrypt.hash(password, 12)
    });

    return res.status(201).json({
      token: createToken(user),
      user: toPublicUser(user)
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.json({
      token: createToken(user),
      user: toPublicUser(user)
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/me", authenticateRequest, (req, res) => {
  res.json({ user: toPublicUser(req.user) });
});

module.exports = router;

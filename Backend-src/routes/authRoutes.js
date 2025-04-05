const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser){
                return res.status(400).json({ message: 'Email already exists' })
            };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid credentials");
      }
  
      const hashpassword = await bcrypt.compare(password, user.password);
      if (hashpassword) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: false,
            sameSite: "Lax",
            path: "/", 


            maxAge: 24 * 60 * 60 * 1000
        });
          
        res.status(200).json({ message: "Login successful" });
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

module.exports = router;
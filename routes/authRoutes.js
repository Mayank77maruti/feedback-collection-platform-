const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

// Registration route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ username, email, password: hashedPassword });
        await admin.save();
        res.status(201).json({ message: 'Admin registered!' });
    } catch (err) {
        res.status(400).json({ error: 'Registration failed', details: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (admin && await bcrypt.compare(password, admin.password)) {
            req.session.adminId = admin._id;
            res.json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Login failed', details: err.message });
    }
});

// Logout route
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ message: 'Logged out' });
    });
});

module.exports = router;

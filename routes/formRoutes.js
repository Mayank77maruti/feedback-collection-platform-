const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Create a new form (admin)
router.post('/', async (req, res) => {
    try {
        const { title, questions, createdBy } = req.body;
        const form = new Form({ title, questions, createdBy });
        await form.save();
        res.status(201).json({ message: 'Form created!', form });
    } catch (err) {
        res.status(400).json({ error: 'Failed to create form', details: err.message });
    }
});

// List all forms
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find().sort({ createdAt: -1 });
        res.json(forms);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch forms' });
    }
});

// Get form details by ID
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ error: 'Form not found' });
        res.json(form);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch form' });
    }
});

module.exports = router;

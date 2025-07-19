const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

// GET /responses - return all feedback as JSON
router.get('/', async (req, res) => {
    try {
        const feedback = await Response.find().sort({ date: -1 });
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch feedback' });
    }
});

// POST /responses - save new legacy feedback
router.post('/', async (req, res) => {
    try {
        const { name, email, feedback } = req.body;
        const response = new Response({ name, email, feedback });
        await response.save();
        res.status(201).json({ message: 'Feedback submitted!' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to submit feedback' });
    }
});

// POST /responses/:formId - save new form-based feedback
router.post('/:formId', async (req, res) => {
    try {
        const { name, email, answers } = req.body;
        const { formId } = req.params;
        const response = new Response({ formId, name, email, answers });
        await response.save();
        res.status(201).json({ message: 'Feedback submitted!' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to submit feedback' });
    }
});

// GET /responses/:formId - get all responses for a specific form
router.get('/:formId', async (req, res) => {
    try {
        const { formId } = req.params;
        const responses = await Response.find({ formId }).sort({ date: -1 });
        res.json(responses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch responses' });
    }
});

module.exports = router;

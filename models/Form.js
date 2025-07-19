const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [{ type: String, required: true }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', formSchema);

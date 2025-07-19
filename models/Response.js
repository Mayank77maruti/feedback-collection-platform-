const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    feedback: { type: String }, // for legacy/freeform feedback
    answers: [{ type: String }], // for form-based answers
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Response', responseSchema);

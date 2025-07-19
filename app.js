const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));

app.use('/', authRoutes);
app.use('/forms', formRoutes);
app.use('/responses', responseRoutes);
app.use('/users', userRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';

require('./users');

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});
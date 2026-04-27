const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: String,
  resort: String,
  perPerson: Number,
  image: String,
  description: String
});

// REGISTER + EXPORT MODEL (IMPORTANT)
module.exports = mongoose.model('Trip', tripSchema);
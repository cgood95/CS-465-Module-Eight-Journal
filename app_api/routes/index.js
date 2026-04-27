const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrlAuth = require('../controllers/authentication');

// auth routes
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// trips routes (ADD THIS)
router.use('/', require('./trips'));

module.exports = router;
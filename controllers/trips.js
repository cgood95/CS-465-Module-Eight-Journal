const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tripsController = require('../controllers/trips');

// PUBLIC (if required)
router.get('/', tripsController.tripsList);
router.get('/:tripCode', tripsController.tripsFindByCode);

// 🔒 PROTECTED (ADMIN ONLY)
router.post('/', auth, tripsController.tripsAddTrip);
router.put('/:tripCode', auth, tripsController.tripsUpdateTrip);
router.delete('/:tripCode', auth, tripsController.tripsDeleteTrip);

module.exports = router;
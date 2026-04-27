const express = require('express');
const router = express.Router();
const controller = require('../../app_server/controllers/travelController');

// GET all trips
router.get('/trips', controller.tripsList);

// GET single trip
router.get('/trips/:tripId', controller.tripsFindById);

// CREATE trip
router.post('/trips', controller.addTrip);

// UPDATE trip
router.put('/trips/:tripId', controller.updateTrip);

// DELETE trip
router.delete('/trips/:tripId', controller.deleteTrip);

module.exports = router;